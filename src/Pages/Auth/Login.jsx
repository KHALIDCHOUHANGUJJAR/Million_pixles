import { Link, useNavigate } from "react-router-dom";

import { loginImage } from "../../Utils/Images";
import { useForm } from "react-hook-form";

function Login() {
  const naivgate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    naivgate("/pixels");
    reset();
  };

  console.log(watch("example"));
  return (
    <div className="flex  w-full h-screen">
      <div className="  bg-[#272727] w-full md:w-[60%]   flex flex-col  p-6">
        <div className="flex items-center gap-2 p-0 md:p-4">
          <div className=" w-10 md:w-[3vw]  h-[6vh] rounded-full bg-white md:bg-amber-50"></div>
          <p className="text-text-200 ml-1 text-xl font-semibold 2xl:text-2xl">
            Wall Of Internet
          </p>
        </div>
        <div className="flex items-center h-full  justify-center">
          <div className="text-white">
            <div className="flex items-center justify-center h-full ">
              <h1 className="text-3xl  2xl:text-4xl font-bold mb-8">Login</h1>
            </div>
            <p className="text-sm   w-full  2xl:text-lg text-text-200 mb-4 ">
              By creating an account. you agree to the
              <Link href="#" className="ml-2 text-orange-500 underline mr-1.5">
                Terms of Use
              </Link>
              and
              <Link href="#" className=" text-orange-500 ml-1.5 underline">
                Privacy Policy
              </Link>
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-full min-h-full
            "
            >
              <div className="mb-4">
                <label className="block text-text-200 text-md mb-2 2xl:text-lg">
                  User Name
                </label>
                <input
                  {...register("name", {
                    required: "User name is required",
                  })}
                  type="text"
                  className="w-full p-2 px-4 2xl:py-4 bg-blacke-400 text-text-200 rounded-[0.75rem] 
                  border border-gray-400/50 outline-none focus:border-orange-500 focus:ring-0"
                 />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-text-200 text-md mb-2 2xl:text-lg">
                  Password
                </label>
                <input
                  {...register("Password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className="w-full p-2 px-4 2xl:py-4 bg-blacke-400 text-text-200 rounded-[0.75rem] 
                  border border-gray-400/50 outline-none focus:border-orange-500 focus:ring-0"
                   />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 2xl:py-4 hover:bg-text2-200 text-white py-2 rounded-[0.75rem] font-semibold"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-center font-semibold text-text-200 2xl:text-xl ">
              Don’t have an account?
              <Link to="/singup" className="text-orange-500 ml-1.5 underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-[40%] h-[100vh]">
        <img
          src={loginImage}
          alt="Login"
          className="w-full h-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default Login;
