import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import tshirt from "assets/images/category/tshirt.png";
import shirts from "assets/images/category/shirts.png";
import jacket from "assets/images/category/jacket.png";
import sweaters from "assets/images/category/sweaters.png";
import dress from "assets/images/category/dress.png";

import { Link } from "react-router-dom";

const items = [
  {
    image: tshirt,
    href: "/shop/tshirts",
    title: "T-shirts",
    label: "22 items available",
  },
  {
    image: shirts,
    href: "/shop/shirts",
    title: "Shirts",
    label: "9 items available",
  },
  {
    image: jacket,
    href: "/shop/jackets",
    title: "Jackets",
    label: "23 items available",
  },
  {
    image: sweaters,
    href: "/shop/sweaters",
    title: "Sweaters",
    label: "20 items available",
  },
  {
    image: dress,
    href: "/shop/dress",
    title: "Dress",
    label: "6 items available",
  },
  {
    image: undefined,
    href: "/shop",
    title: "Browse",
    label: undefined,
  },
];

const CategoryMenus = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="text-lg">
            Category
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white p-5 lg:p-8 shadow-md ">
            <span className="text-lg font-semibold tracking-wide">
              Popular Categories
            </span>
            <div className="my-3 bg-gray-100 w-full h-[3px]"></div>
            <ul
              className="grid grid-cols-2 grid-rows-3 md:w-[35rem] lg:w-[40rem]
            gap-2"
            >
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  title={item.title}
                  href={item.href}
                  image={item.image}
                >
                  {item.label}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = ({
  title,
  image,
  children,
  href,
}: {
  title: string;
  image?: string;
  children?: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={`${image ? "" : "items-center justify-center"} flex
          gap-2 bg-gray-100 p-2 border-2 border-transparent hover:border-green-200
          h-full`}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="row-span-2 w-12 aspect-square object-contain"
            ></img>
          )}

          <div>
            <span className="font-bold">{title}</span>
            <p className="text-gray-500">{children}</p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default CategoryMenus;
