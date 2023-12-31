import { tagColor } from "~/functions/tagColor";
import { Link } from "@remix-run/react";

export default function PostTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      {tags &&
        tags.map &&
        tags?.map((tag, tagIndex) => (
          <li key={tagIndex} className="m-1">
            <Link
              to={`/tag/${tag}`}
              className={`inline-flex capitalize text-center py-1 px-3 rounded-full transition duration-150 ease-in-out ${
                tagColor[tag] || "text-gray-100 bg-pink-500 hover:bg-pink-600"
              }`}
            >
              {tag}
            </Link>
          </li>
        ))}
    </ul>
  );
}
