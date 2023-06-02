const NewsLetter = () => {
  return (
    <>
      <div className="w-full bg-[#eeeeee] px-2 py-5">
        <div className="mx-auto flex max-w-xl items-center">
          <div>
            <div className="text-2xl max-sm:text-xl">
              Subscribe For Newsletters
            </div>
            <div className="text-gray-500">
              Subscribe for early access on offers and new arrivals
            </div>
          </div>
          <button className="ms-6 max-sm:ms-4 bg-[#d32f2f] px-4 py-3 font-bold uppercase tracking-widest text-white transition-colors duration-500 hover:bg-black">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
