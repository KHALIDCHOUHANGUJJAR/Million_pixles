import { NavLink } from "react-router";
import About from "../Components/About";
import Footer from "../Components/Footer";

function Landing() {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <section className="h-screen">
        <img
          src="/Assets/Images/image 8.png"
          alt="image"
          className="w-full h-full object-cover"
        />
      </section>
      <main className="flex flex-col items-center
       w-full relative">
        <div className="w-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
          <div className="w-full md:w-[80%] mb-8 md:mb-0">
            <h1 className="text-3xl md:text-[3vw] font-semibold tracking-wider md:tracking-[1vw] mb-4">
              <span className="text-[#B7552E] text-4xl md:text-[5vw]">
                Wall
              </span>
              <br /> Of Internet
            </h1>
            <p
              className="text-[#B7552E] font-poppins text-xl md:text-[2vw] font-normal 
            leading-relaxed md:leading-[4vw] 2xl:leading-[8vw] tracking-wide md:tracking-[0.5vw]"
            >
              Own a Piece of the Internet.
            </p>

            <div className="w-full md:w-[24vw] h-0.5 bg-amber-100 my-4"></div>
            <p
              className="text-white font-poppins text-base md:text-[1.5vw] font-normal
             leading-relaxed md:leading-[3vw] tracking-wider md:tracking-[4px] w-full md:w-[80%]"
            >
              Buy, Sell, and Edit Pixels on the Wall of Internet – Where Your
              Creativity Lives Forever.
            </p>
          </div>
          <img
            src="/Assets/Images/Oval.png"
            alt="ovalimage"
            className="absolute top-0 left-[70%] w-[30%] h-[37%]   "
          />
          <img
            src="/Assets/Images/Oval (1).png"
            alt="ovalimage"
            className="absolute top-0 left-[80%] w-[20%] h-[37%]"
          />
          <div className=" w-full h-full ">
            <nav className="relative z-10 flex flex-col md:items-end
             items-center justify-center md:justify-start w-full md:h-full
              gap-4 md:gap-[3vh] text-base md:text-lg font-poppins md:mt-[18vh]">
              <NavLink
                to=""
                className="flex items-center py-2 md:py-2 2xl:py-3.5 px-4 md:px-6 hover:underline underline-offset-4 font-semibold text-lg md:text-xl 2xl:text-3xl text-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="flex items-center py-2 md:py-2 2xl:py-3.5 px-4 md:px-6 hover:underline underline-offset-4 font-semibold text-lg md:text-xl 2xl:text-3xl text-white"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="flex items-center py-2 md:py-2 2xl:py-3.5 px-4 md:px-6 hover:underline underline-offset-4 font-semibold text-lg md:text-xl 2xl:text-3xl text-white"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/login"
                className="flex items-center py-2 md:py-2 2xl:py-3.5 px-4 md:px-6 hover:underline underline-offset-4 font-semibold text-lg md:text-xl 2xl:text-3xl text-white"
              >
                Login
              </NavLink>
            </nav>
          </div>
        </div>
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default Landing;
