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
      <main
        className="flex flex-col items-center
       w-full relative py-10  "
      >
        <div
          className="w-full flex flex-col md:flex-row
         items-center justify-center p-4  md:p-8 mb-[8rem]"
        >
          <div className="w-full md:w-[90%]  md:mb-0">
            <h1
              className=" wall font-semibold tracking-wider font-nunito
             md:tracking-[0.4vw] "
            >
              <span
                className=" md:tracking-[1vw] font-semibold 
               shrink text-[#B7552E] text-4xl md:text-[7rem]"
              >
                Wall
              </span>
              <br />
              <span className="text-[5rem]"> Of Internet</span>
            </h1>
            <p
              className="text-[#B7552E] font-poppins text-[5rem] md:text-[2vw] font-normal 
            leading-[5vw] md:leading-[2vw] tracking-[1vw] md:tracking-[0.3vw]"
            >
              Own a Piece of the Internet.
            </p>

            <div className="w-full md:w-[21vw] h-[0.4vw] bg-amber-100 my-4"></div>
            <p
              className="text-white font-poppins text-[5vw] md:text-[1.2vw] font-normal 
            leading-[7vw] md:leading-[2.5vw] tracking-[1vw] md:tracking-[0.2vw] w-full"
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
            <nav
              className="relative z-10 flex flex-col md:items-end
             items-center justify-center md:justify-start w-full md:h-full
              gap-4 md:gap-[3vh] text-base md:text-lg font-poppins md:mt-[18vh]"
            >
              <NavLink
                to=""
                className="flex items-center py-2 md:py-2 2xl:py-3.5 px-4 md:px-1 font-semibold
                 text-lg md:text-xl 2xl:text-3xl text-white relative 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0
                  after:h-[2px] after:bg-[#B7552E] after:transition-all after:duration-300
                   hover:after:w-full"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="flex items-center py-2 md:py-2 2xl:py-3.5 px-4 md:px-1 font-semibold
                text-lg md:text-xl 2xl:text-3xl text-white relative 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0
                 after:h-[2px] after:bg-[#B7552E] after:transition-all after:duration-300
                  hover:after:w-full"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="flex items-center py-2 md:py-2 2xl:py-3.5 px-4 md:px-1 font-semibold
                text-lg md:text-xl 2xl:text-3xl text-white relative 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0
                 after:h-[2px] after:bg-[#B7552E] after:transition-all after:duration-300
                  hover:after:w-full"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/login"
                className="flex items-center py-2 md:py-2 2xl:py-3.5 px-4 md:px-1 font-semibold
                text-lg md:text-xl 2xl:text-3xl text-white relative 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0
                 after:h-[2px] after:bg-[#B7552E] after:transition-all after:duration-300
                  hover:after:w-full"
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
