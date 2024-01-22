import { Link } from "react-router-dom";

interface Props {
  title: string;
  image?: string;
  link: string;
}

const CategoryCard = ({ title, image, link }: Props) => {
  return (
    <Link
      to={link}
      className=" bg-gray-100 flex flex-col items-center justify-center p-5 rounded-xl cursor-pointer group relative
      hover:border-2 hover:border-green-200"
    >
      <h1 className=" font-[500] md:text-base lg:text-lg top-0  group-hover:scale-105 duration-500">
        {title}
      </h1>
      {image && (
        <img
          src={image}
          alt={`${title} image`}
          className="object-contain aspect-[1/1] h-full  w-full group-hover:scale-105 duration-500 pointer-events-none"
        />
      )}
    </Link>
  );
};

export default CategoryCard;
