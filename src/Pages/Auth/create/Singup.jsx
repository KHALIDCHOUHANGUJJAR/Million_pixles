import { Link } from "react-router-dom";

import { sIngupImage } from "../../../Utils/Images";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function singup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="flex justify-center items-center  w-full h-screen">
      <div className="hidden md:block w-[40%] h-[100vh]">
        <img
          src={sIngupImage}
          alt="Login"
          className="w-full h-full object-fill shadow-lg"
        />
      </div>
      <div className="  bg-[#272727] w-full md:h-[95%] h-full md:w-[60%] flex flex-col  ">
        <div className="flex items-center  justify-center">
          <div
            className="text-white md:w-[80%] w-[90%] 
           border-2 border-slate-700  rounded-xl md:p-8 p-4 shadow-2xl  "
          >
            <div className=" h-full">
              <h1 className="text-2xl font-bold mb-8">Create an Account</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="h-[20px">
              <div className="flex items-center  h-full justify-between">
                <div className=" w-[48%]">
                  <label className="block text-gray-200 text-sm ">
                    Full Name
                  </label>
                  <input
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="w-full p-1.5 px-4
                     text-gray-200 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm ">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="mb-1 w-[48%]">
                  <label className="block text-gray-200 text-sm ">
                    User Name
                  </label>
                  <input
                    {...register("username", {
                      required: "Username is required",
                    })}
                    type="text"
                    placeholder="Enter Your Username"
                    className="w-full p-1.5 px-4 text-gray-200 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-200 text-sm ">
                  Email Address
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-1.5 px-4 text-gray-200 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-gray-200">
                  Phone Number
                </label>
                <PhoneInput
                  country={"us"}
                  inputStyle={{
                    marginBottom: "50px",
                    width: "100%",
                    background: "transparent",
                    color: "#fff",
                    borderColor: "#374151",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                />
              </div>

              <div className="space-y-2 mt-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="refer" className="text-gray-200">
                    Refer
                  </label>
                  <span className="text-sm text-gray-500">
                    (choose unique member ID that you will use to log in, but
                    don't use spaces)
                  </span>
                </div>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  placeholder="Enter Refer ID"
                  className="w-full p-1.5 px-4 text-gray-200 rounded-md border border-gray-700
                   focus:outline-none focus:border-orange-500"
                />{" "}
              </div>
              <div className="mb-4 ">
                <label className="block text-gray-200 text-sm ">
                  Set Your Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full p-1.5 px-4 text-gray-200 rounded-md border border-gray-700
                   focus:outline-none focus:border-orange-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm flex items-center md:flex-nowrap flex-wrap text-gray-300 mb-4">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "You must agree to continue",
                    })}
                    className="mr-2 w-5 h-5 accent-orange-500"
                  />
                  By creating an account, you agree to our
                  <Link to="/terms" className=" underline ml-1">
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
                <p className="text-sm  flex font-sans  text-gray-300 mb-4">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "You must agree to continue",
                    })}
                    className="mr-2 w-8 h-8  accent-orange-500"
                  />
                  By creating an account, i am also concenting to recive SMS{" "}
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
                  className="p-10 bg-[#F1713D] hover:bg-orange-700 text-white py-2 rounded-lg font-semibold"
                >
                  Create an account
                </button>
                <p className=" text-sm text-center flex items-center h-full font-semibold text-gray-200">
                  Already have an account?
                  <Link to="/" className="text-[#F1713D] ml-1 underline">
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

export default singup;
