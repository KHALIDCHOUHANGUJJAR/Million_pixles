import { useForm } from "react-hook-form";
import Button from "../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function Payment() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    reset(data);
  };
  return (
    <div className="flex flex-col  w-full md:flex-row min-h-screen">
      <div className="w-[100%] md:w-[60%] flex items-center md:justify-start justify-center bg-blacke-400 p-6 min-h-screen">
        <div className="p-2 2xl:p-4 md:w-[60%] w-[100%]">
          <h1 className="text-text-200 text-xl md:text-2xl 2xl:text-3xl  font-semibold pb-4 2xl:pb-10  border-b border-text-2 ">
            Payment Proceed
          </h1>

          <div className="mt-8 mb-10 text-text-200 space-y-8 2xl:space-y-12">
            <h2 className="text-xl 2xl:text-2xl ">User Details</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 2xl:space-y-10 w-[100]"
            >
              <div>
                <p className="mb-1 font-semibold 2xl:text-xl ">Name</p>
                <input
                  placeholder="Write here"
                  className="w-full rounded-[1.125rem] border-2 border-white/20 bg-transparent p-3 2xl:p-6 px-10 2xl:rounded-2xl
                   text-text-200 placeholder:text-text-200/50"
                  {...register("name", { required: true })}
                />
              </div>

              <div>
                <p className="mb-1 font-semibold 2xl:text-xl">Email Address</p>
                <input
                  placeholder="https://Example.com"
                  className="w-full rounded-[1.125rem] border-2 border-white/20 bg-transparent p-3 2xl:p-6 px-10 2xl:rounded-2xl text-text-200 placeholder:text-text-200/50"
                  {...register("email", { required: true })}
                />
              </div>

              <div>
                <p className="mb-1 font-semibold 2xl:text-xl">
                  Order Date & Time
                </p>
                <input
                  type="datetime-local"
                  className="w-full rounded-[1.125rem] border-2 border-white/20 bg-transparent p-3 2xl:p-6 px-10 2xl:rounded-2xl text-text-200"
                  {...register("orderDate", { required: true })}
                />
              </div>

              <div>
                <p className="mb-1 font-semibold 2xl:text-xl">Order ID</p>
                <input
                  placeholder="Order #12345"
                  className="w-full rounded-[1.125rem] border-2 border-white/20 bg-transparent p-3 2xl:p-6 px-10 2xl:rounded-2xl text-text-200"
                  {...register("orderId", { required: true })}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center  md:w-[50%] bg-orange-500  2xl:p-8  min-h-screen ">
        <div className="flex justify-between items-center mb-4 mt-4 2xl:mt-8">
          <div className="flex items-start justify-center w-full">
            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-6 md:p-2 2xl:p-4  w-4 h-4 rounded-full border-2   text-center">
                1
              </div>
              <h1 className="text-sm font-semibold">Buy Pixel</h1>
            </div>
            <div className="w-[8vw] 2xl:w-[11vw]  border-2 border-white/20 "></div>
            <div className="flex items-center  flex-col justify-between">
              <div className="flex items-center justify-center p-4 md:p-2 2xl:p-4 w-4 h-4 rounded-full border-2  border-white text-center">
                2
              </div>
              <h1 className="font-semibold text-sm"> Confirm Order</h1>
            </div>
            <div className="w-[8vw] 2xl:w-[11vw] border-2 border-white/20 "></div>

            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-4 md:p-2 2xl:p-4 w-4 h-4 rounded-full border-2 bg-black border-black   text-center">
                3
              </div>
              <h1 className="font-semibold text-black text-sm ">Payment</h1>
            </div>
          </div>
        </div>

        <div
          className=" bg-text-200 rounded-[1rem] p-2  md:w-[60%] shadow-lg 
             transform transition-all  duration-1000 ease-in-out"
        >
          <div className="px-4">
            <h3 className="text-lg text-black font-bold mb-4 2xl:text-2xl ">
              Card Details
            </h3>
            <div className="w-full  ">
              <h5 className="text-md 2xl:text-xl text-black mb-3 ">
                {" "}
                Card Type
              </h5>
              <div className="flex items-center justify-center mb-4">
                <img
                  src="Assets/Images/Rectangle 9.png"
                  alt="masterCard"
                  className="object-cover w-[10vw] h-[9vh]  "
                />
                <img
                  src="Assets/Images/Rectangle 10.png"
                  alt="Visa"
                  className="object-cover w-[10vw] h-[9vh] "
                />
                <img
                  src="Assets/Images/Rectangle 11.png"
                  alt="RuPay"
                  className="object-cover w-[10vw] h-[9vh] "
                />
                <div className="px-3 border-2 border-black/5 rounded  flex items-center justify-center text-center">
                  <h4 className="text-black w-[2vw] flex items-center h-[8vh] 2xl:h-[7vh] justify-center ">
                    See all
                  </h4>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-black  space-y-[2vh] 2xl:space-y-2 2xl:mb-4  "
              >
                <div>
                  <label className="text-sm font-semibold 2xl:text-xl  ">
                    Name on card
                  </label>
                  <input
                    placeholder="Name"
                    className="border-2 rounded-lg  border-white/20  w-full bg-blacke-400 text-text-200 px-5 p-1.5 2xl:p-4 "
                    {...register("exampleRequired", { required: true })}
                  />{" "}
                </div>
                <div>
                  <label className="text-sm font-semibold 2xl:text-xl ">
                    Card Number
                  </label>
                  <input
                    className="input-style border-2 rounded-lg  border-white/20  w-full bg-blacke-400 text-text-200 px-5 p-1.5 2xl:p-4 flex  "
                    placeholder="1111 2222 3333 4444"
                    type="text"
                    maxLength="19"
                    onInput={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "")
                        .substring(0, 16)
                        .replace(/(.{4})/g, "$1 ")
                        .trim();
                    }}
                    {...register("cardNumber", {
                      required: true,
                      minLength: 14,
                      maxLength: 16,
                    })}
                  />{" "}
                </div>
                <div className="flex w-full items-center justify-between gap-1.5">
                  <div>
                    <label className="text-sm font-semibold 2xl:text-xl ">
                      Expiration date{" "}
                    </label>
                    <input
                      className="border-2 rounded-lg border-white/20 w-full bg-blacke-400 text-text-200
                      p-1.5 2xl:p-4"
                      placeholder="MM/YY"
                      type="text"
                      maxLength="5"
                      onInput={(e) => {
                        e.target.value = e.target.value
                          .replace(/\D/g, "")
                          .replace(/(\d{2})(\d{0,2})/, "$1/$2");
                      }}
                      {...register("expiryDate", { required: true })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold 2xl:text-xl ">
                      CVC
                    </label>
                    <input
                      className="border-2 rounded-lg  border-white/20  w-full bg-blacke-400 text-text-200
                        p-1.5  2xl:p-4  "
                        placeholder="123"
                        type="text"
                        maxLength="3"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3);
                        }}
                        {...register("cvc", { required: true, minLength: 3, maxLength: 3 })}
                    />{" "}
                  </div>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
              </form>
              <div className="w-full p-2 border-b-1 mb-1  border-[#5F65C3] "></div>
              <div className="w-full space-y-2 2xl:space-y-4 2xl:text-xl mb-3">
                <div className="flex items-center justify-between text-black">
                  <h2>Subtotal</h2>
                  <h2>$2100.00</h2>
                </div>
                <div className="flex items-center justify-between text-black">
                  <h2>Platform fee</h2>
                  <h2>$4.00</h2>
                </div>
                <div className="flex items-center justify-between text-black">
                  <h2>Total (Tax incl.)</h2>
                  <h2>$2104.00</h2>
                </div>
              </div>
              <div
                className="text-text-200 flex items-center justify-between w-full 
               cursor-pointer bg-orange-500  p-1 2xl:p-3 rounded-[0.75rem]"
              >
                <p>$1,672</p>
                <Button
                  handleClick={() => navigate("/cong")}
                  text={"Checkout"}
                  iconR={<FaArrowRightLong className="ml-2.5 text-2xl" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
