import { NavLink } from "react-router";

function Landing() {
  return (
    <div className="flex flex-col h-screen w-full">
      <section>
        <img
          src="/Assets/Images/image 8.png"
          alt="image"
          className="w-[100%] h-[100vh] items-stretch object-fill"
        />
      </section>
      <main className="flex flex-col items-center w-full h-screen">
        <div className="w-[100%] flex items-center justify-center  p-4">
          <div className="w-[80%]">
            <h1 className="h-[20vh] text-[3vw] space-x-0 font-semibold tracking-[1vw]">
              {" "}
              <span className="text-[#B7552E] text-[5vw] text-5xl ">
                Wall
              </span>{" "}
              <br /> Of Internet
            </h1>
            <p className="text-[#B7552E] font-poppins text-[2vw] font-normal leading-[4vw] tracking-[0.5vw]">
              Own a Piece of the Internet.
            </p>

            <div className="w-[24vw] p-0.5 bg-amber-100"></div>
            <p className="text-white font-poppins text-[1.5vw] font-normal leading-[3vw] tracking-[4px] w-[80%]">
              Buy, Sell, and Edit Pixels on the Wall of Internet – Where Your
              Creativity Lives Forever.
            </p>
          </div>

          <div className={`w-[20%] `}>
            <nav className="flex items-end justify-between flex-col h-full gap-[3vh] text-lg font-poppins mt-[18vh]">
              <NavLink
                to=""
                className="
                  flex items-center xl:py-2 2xl:py-3.5 px-6 hover:underline underline-offset-4 font-semibold   
                 "
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="
                flex items-center xl:py-2 2xl:py-3.5 px-6 hover:underline underline-offset-4 font-semibold  
               "
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className="
                flex items-center xl:py-2 2xl:py-3.5 px-6 hover:underline underline-offset-4 font-semibold  
               "
              >
                Contact Us
              </NavLink>

              <NavLink
                to="/login"
                className="
                flex items-center xl:py-2 2xl:py-3.5 px-6 hover:underline underline-offset-4 font-semibold  
               "
              >
                Login
              </NavLink>
            </nav>
          </div>
        </div>
        <div></div>
      </main>
      <section></section>
    </div>
  );
}

export default Landing;
