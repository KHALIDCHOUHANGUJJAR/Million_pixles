const Contact = () => {
  return (
    <div className="flex flex-col items-center  w-full mt-6 p-2  ">
      <h1 className="h-[15vh] text-[3vw] space-x-0  tracking-[0.5vw]">
        Join the Wall of Internet Revolution
      </h1>
      <p className="flex items-center  text-center w-[60vw] text-gray-300 text-lg leading-relaxed tracking-wide">
        Be part of a groundbreaking digital movement. Own, create, and trade
        your space on the Wall of Internet. Start building your legacy
        today—because the internet belongs to everyone.
      </p>
      <div className="flex items-center justify-between gap-10 mt-4">
        <button className="bg-[#B7552E] p-3 rounded-3xl font-semibold">
          {" "}
          👀 Insight{" "}
        </button>
        <button className="bg-[#B7552E] p-3 rounded-3xl font-semibold">
          {" "}
          👋 contact{" "}
        </button>
      </div>
      <div className="w-[95%] h-0.5 bg-[#FFF] z-10 mt-8"></div>
    </div>
  );
};

export default Contact;
