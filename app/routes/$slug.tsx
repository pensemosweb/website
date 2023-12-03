import { json, type LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { getPost } from "~/firebase/models/posts.server";
import { marked } from "marked";
import type { Post } from "~/types/publish";

export async function loader({ params }: LoaderArgs) {
  const { slug } = params;
  const post: Post = await getPost(slug || "");

  const content: string | undefined = post.content as string;

  if (!content) {
    throw new Response(`El articulo "${slug}" no existe 😥`, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json({
    post,
    html: marked(content.replace(/#NEWLINE#/g, "\n")),
  });
}

export function meta({ data, params }: any) {
  const { title, description, image } = data.post;

  if (!title || !description)
    return [
      { title: `Post no disponible - Pensemosweb` },
      {
        name: "description",
        content: `No hay resultados con el nombre ${params.slug} 😥`,
      },
    ];

  return [
    { title: `${title} - Pensemosweb` },
    { name: "description", content: description },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:image",
      content: image,
    },
  ];
}

export default function Slug() {
  const { post, html } = useLoaderData();

  const { image, title } = post;

  return (
    <div className="px-4 py-20 flex flex-wrap gap-3">
      <section className="flex-grow flex-shrink">
        <article className="slug">
          <h1 className="font-bold">{title}</h1>
          <figure className="relative">
            <img
              decoding="async"
              loading="lazy"
              src={image}
              alt={title}
              className="rounded-xl w-full object-contain"
            />

            <Link>
              <BiLeftArrowAlt className="text-white text-2xl" />
            </Link>
          </figure>

          <section
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: html }}
          ></section>
        </article>
      </section>
    </div>
  );
}
