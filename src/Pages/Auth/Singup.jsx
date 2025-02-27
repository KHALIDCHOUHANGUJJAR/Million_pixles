import { Link, useNavigate } from "react-router-dom";

import { sIngupImage } from "../../Utils/Images";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Singup() {
  let naivgate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    control,

    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    naivgate("/create");
    reset();
  };
  return (
    <div className="flex justify-center items-center  w-full h-screen relative">
      <div className="hidden md:block w-[40%] h-[100vh] fixed left-0">
        <img
          src={sIngupImage}
          alt="Login"
          className="w-full h-full object-fill shadow-lg "
        />
      </div>
      <div
        className="   w-full md:h-[100%] h-full md:w-[60%] flex flex-col items-center bg-blacke-400
       justify-center absolute right-0   "
      >
        <div className="flex items-center  justify-center  ">
          <div
            className="text-text-200 md:w-[80%] w-[90%]  
           rounded-[1.5rem] border border-gray-400/50
           2xl:p-8 p-5 shadow-2xl  "
          >
            <div className=" h-full ">
              <h1 className="text-2xl 2xl:text-3xl font-bold mb-3 font-poppins">
                Create an account
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-full 2xl:space-y-10"
            >
              <div className="flex items-center  h-full justify-between mb-2 ">
                <div className=" w-[48%] 2xl:space-y-2">
                  <label className="block text-text-200 text-sm  2xl:text-xl">
                    Full Name
                  </label>
                  <input
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    type="text"
                    className="w-full p-1.5 px-4 2xl:py-2 bg-blacke-400 text-text-200 rounded-[0.75rem] 
             border border-gray-400/50 outline-none focus:border-orange-500 focus:ring-0"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm ">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="mb-1 w-[48%] 2xl:space-y-2 ">
                  <label className="block text-text-200 text-sm 2xl:text-xl ">
                    User Name
                  </label>
                  <input
                    {...register("username", {
                      required: "Username is required",
                    })}
                    type="text"
                    className="w-full p-1.5 px-4 2xl:py-2 bg-blacke-400 text-text-200 rounded-[0.75rem] 
                    border border-gray-400/50 outline-none focus:border-orange-500 focus:ring-0"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4 2xl:space-y-2">
                <label className="block text-text-200 text-sm 2xl:text-xl  ">
                  Email Address
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="w-full p-1.5 px-4 2xl:py-2 bg-blacke-400 text-text-200 rounded-[0.75rem] 
                  border border-gray-400/50 outline-none focus:border-orange-500 focus:ring-0"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-text-200">Phone Number</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <PhoneInput
                    {...field}
                    country={"af"}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      
                      background: "transparent",
                      color: "#fff",
                      borderColor: "#374151",
                      borderRadius: "12px",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    containerStyle={{ width: "100%" }}
                    onFocus={(e) => (e.target.style.borderColor = "#f1713d")}
                    onBlur={(e) => (e.target.style.borderColor = "#374151")} 
                  />
                  
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              <div className=" mt-5 2xl:space-y-2 ">
                <div className="flex items-center justify-between ">
                  <label htmlFor="refer" className="text-text-200 2xl:text-xl">
                    Refer
                  </label>
                  <span className="text-xs text-gray-500">
                    (choose a unique member ID that you will use to log in, but
                    don't use spaces)
                  </span>
                </div>
                <input
                  {...register("ref", {
                    required: "Password is required",
                  })}
                  type="password"
                  className="w-full p-1.5 px-4 2xl:py-2 bg-blacke-400 text-text-200 rounded-[0.75rem] 
                  border border-gray-400/50 outline-none focus:border-orange-500 focus:ring-0"
                />
                {errors.ref && (
                  <p className="text-red-500 text-sm">{errors.ref.message}</p>
                )}
              </div>
              <div className="mt-3  2xl:space-y-2">
                <label className="block text-text-200 text-sm 2xl:text-xl ">
                  Set Your Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className="w-full p-1.5 px-4 2xl:py-2 bg-blacke-400 text-text-200 rounded-[0.75rem] 
             border border-gray-400/50 outline-none focus:border-orange-500 focus:ring-0"
                />

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="p-3 2xl:p-1 flex flex-col xl:gap-3.5">
                <p className="text-sm flex items-center md:flex-nowrap flex-wrap w-full text-gray-300  2xl:text-lg 2">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "You must agree to continue",
                    })}
                    className="mr-2 w-5 h-5 2xl:py-2 input-check rounded cursor-pointer outline-none focus:border-orange-500 focus:ring-0 accent-orange-500 "
                  />
                  By creating an account, you agree to our
                  <Link to="/terms" className=" underline p-1 ">
                    Terms of Use
                  </Link>
                  and
                  <Link to="/privacy" className=" underline ml-1">
                    Privacy Policy
                  </Link>
                </p>
                {errors.terms && (
                  <p className="text-red-500 text-sm mb-4">
                    {errors.terms.message}
                  </p>
                )}
                <p className="text-sm text-start  flex font-sans   text-gray-300 mb-3 2xl:text-xl">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "You must agree to continue",
                    })}
                    className="mr-2 w-5 h-5 2xl:py-2 input-check rounded cursor-pointer outline-none focus:border-orange-500 focus:ring-0 accent-orange-500 "
                  />
                  By creating an account, I am also concenting to recive SMS{" "}
                  messages and email, including products, new features updates,{" "}
                  events, and marketing promotions.
                </p>
                {errors.terms && (
                  <p className="text-red-500 text-sm mb-4">
                    {errors.terms.message}
                  </p>
                )}
              </div>
              <div className="flex text-center md:flex-row flex-col items-center justify-between">
                <button
                  type="submit"
                  className="p-10 bg-orange-500 hover:bg-text2-200 text-white py-2 rounded-[1rem] font-semibold"
                >
                  Create an account
                </button>
                <p className=" text-sm text-center flex items-center h-full font-semibold 2xl:text-xl text-text-200">
                  Already have an account?
                  <Link to="/login" className="text-orange-500 ml-1 underline">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
