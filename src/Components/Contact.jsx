import Button from "./Button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center  w-full mt-6 p-2  ">
      <h1
        className="h-[15vh] text-[3vw] space-x-0
        tracking-[0.1vw]"
      >
        Join the Wall of Internet Revolution
      </h1>
      <p className="flex items-center  text-center w-[63vw]
       text-gray-300 text-lg leading-relaxed tracking-wide">
        Be part of a groundbreaking digital movement. Own, create, and trade
        your space on the Wall of Internet. Start building your legacy
        today—because the internet belongs to everyone.
      </p>
      <div className="flex items-center justify-between gap-10 mt-5">
        <Button text={"   👀 Insight "} />
        <Button text={"Contact"} />
      </div>
      <div className="w-[67.125rem] h-[1px] flex-shrink-0 opacity-10 bg-[#FFF] z-10 mt-8"></div>
    </div>
  );
};

export default Contact;
