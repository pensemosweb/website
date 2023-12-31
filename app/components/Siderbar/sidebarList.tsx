import { Link } from "@remix-run/react";

type SideBarListProps = {
  title?: string;
  listCategorys?: string[];
  className?: string;
};

export default function SideBarList({
  listCategorys,
  title,
  className,
}: SideBarListProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl text-gray-200 mb-5">{title}</h2>
      <ul className="-my-3 sticky top-20">
        {listCategorys?.map((category, index) => (
          <li className="flex py-3 border-b border-gray-500" key={index}>
            <Link
              to={`/categoria/${category.toLowerCase()}`}
              className="text-gray-200 font-bold tracking-tight mb-1 capitalize"
            >
              {category.split("-").join(" ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
