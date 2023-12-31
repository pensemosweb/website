import PostItem from "../PostItem/post-item";
import type { CardProps } from "./Card.d";

import AOS from "aos";
import { useEffect } from "react";

type ArticlesListProps = {
  posts?: [];
  title?: string;
  className?: string;
  children?: JSX.Element | string | null;
};

export default function ArticlesList({
  posts,
  title,
  className,
  children,
}: ArticlesListProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });
  return (
    <section className={className}>
      <div className="w-full">
        <div className="pb-12 md:pb-10">
          {/* Section title */}
          <h1
            className="text-3xl text-white mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title}
          </h1>
          <div className="lg:flex lg:justify-between">
            {/* Main content */}
            <div className="lg:grow" data-aos="fade-up" data-aos-delay="200">
              {posts && posts.map && (
                <div
                  className={`grid gap-12 ${
                    !children ? "sm:grid-cols-3" : "sm:grid-cols-2"
                  } sm:gap-x-6 md:gap-y-8 items-start max-sm:block`}
                >
                  {posts?.map(
                    ({
                      id,
                      to,
                      title,
                      image,
                      createdAt,
                      user,
                      tags,
                      summary,
                    }: CardProps) => (
                      <PostItem
                        key={id}
                        to={to}
                        title={title}
                        createdAt={createdAt}
                        authorImg={user.photoURL}
                        author={user.displayName}
                        tags={tags}
                        imageSrc={image.src}
                        imageAlt={image.alt}
                        summary={summary}
                      />
                    ),
                  )}
                </div>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
