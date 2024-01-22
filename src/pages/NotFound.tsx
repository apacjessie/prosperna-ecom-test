import { Link } from "react-router-dom";
import notfound from "assets/images/notfound.png";
import { Frown } from "lucide-react";
import CustomLink from "@/components/ui/custom-link";

const NotValid = ({ message }: { message: string }) => {
  return (
    <section
      className="flex items-center justify-center flex-col h-full
    gap-5 mt-10"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <Frown width={100} height={100} />
        <h1 className="md:text-lg font-[500] text-center">{message}</h1>
      </div>

      <Link
        to="/"
        className="bg-black text-white p-2 px-4
      rounded-full font-[500]"
      >
        Return to home
      </Link>
    </section>
  );
};

const FullPage = () => {
  return (
    <div
      className="flex items-center justify-center 
    flex-col h-screen w-screen bg-green-100"
    >
      <img src={notfound} className="w-[60%] md:w-[40%] pointer-events-none" />
      <h1 className="text-center w-[90%] md:w-[60%] mt-2  md:text-lg font-[500]">
        Oops! Fashion's taking a break. Our style crew is on it. Check out other
        trendy picks meanwhile, or head back home.
      </h1>
      <CustomLink to="/">Return to home</CustomLink>
    </div>
  );
};

export { NotValid, FullPage };
