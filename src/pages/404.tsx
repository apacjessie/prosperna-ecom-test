import { Link } from "react-router-dom";
import notfound from "assets/images/notfound.png";

const Error = () => {
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
      <Link
        to="/"
        className="text-white bg-black px-4 py-2 
        font-[500] rounded-full mt-2"
      >
        Return to home
      </Link>
    </div>
  );
};

export default Error;
