const Loader = () => {
  return (
    <div className="fixed inset-0 flex space-x-4 justify-center items-center dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-6 w-6 bg-black rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader;
