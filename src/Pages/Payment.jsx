import { useForm } from "react-hook-form";
import Button from "../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col  w-full md:flex-row min-h-screen">
      <div className="w-[100%] md:w-[60%] flex items-center md:justify-start justify-center bg-[#272727] p-6 min-h-screen">
        <div className="p-2 md:w-[60%] w-[100%]">
          <h1 className="text-white text-xl md:text-2xl  font-semibold pb-4 border-b ">
            Payment Proceed
          </h1>

          <div className="mt-8 mb-10 text-white space-y-8">
            <h2 className="text-xl ">User Details</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 w-[100]"
            >
              <div>
                <p className="mb-1 font-semibold">Name</p>
                <input
                  placeholder="Write here"
                  className="w-full rounded-xl border-2 border-white/20 bg-transparent p-3 text-white placeholder:text-white/50"
                  {...register("name", { required: true })}
                />
              </div>

              <div>
                <p className="mb-1 font-semibold">Email Address</p>
                <input
                  placeholder="https://Example.com"
                  className="w-full rounded-xl border-2 border-white/20 bg-transparent p-3 text-white placeholder:text-white/50"
                  {...register("email", { required: true })}
                />
              </div>

              <div>
                <p className="mb-1 font-semibold">Order Date & Time</p>
                <input
                  type="datetime-local"
                  className="w-full rounded-xl border-2 border-white/20 bg-transparent p-3 text-white"
                  {...register("orderDate", { required: true })}
                />
              </div>

              <div>
                <p className="mb-1 font-semibold">Order ID</p>
                <input
                  placeholder="Order #12345"
                  className="w-full rounded-xl border-2 border-white/20 bg-transparent p-3 text-white"
                  {...register("orderId", { required: true })}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center  md:w-[50%] bg-[#F1713D] p-2 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-start justify-center w-full">
            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-4 md:p-2 w-4 h-4 rounded-full border-2   text-center">
                1
              </div>
              <h1 className="text-sm font-semibold">Buy Pixel</h1>
            </div>
            <div className="w-[8vw] border-1 border-white/20 "></div>
            <div className="flex items-center  flex-col justify-between">
              <div className="flex items-center justify-center p-4 md:p-2 w-4 h-4 rounded-full border-2  border-white text-center">
                2
              </div>
              <h1 className="font-semibold text-sm"> Confirm Order</h1>
            </div>
            <div className="w-[8vw] border-1 border-white/20 "></div>

            <div className="flex items-center flex-col justify-between">
              <div className="flex items-center justify-center p-4 md:p-2 w-4 h-4 rounded-full border-2 bg-black border-black   text-center">
                3
              </div>
              <h1 className="font-semibold text-black text-sm">Payment</h1>
            </div>
          </div>
        </div>

        <div
          className="md:bg-white bg-white rounded-xl p-3 md:w-[30vw] shadow-lg 
             transform transition-all  duration-100000 ease-in-out"
        >
          <div className="p-2">
            <h3 className="text-xl text-black font-bold mb-1">Card Details</h3>
            <div className="w-full ">
              <h5 className="text-md font-semibold text-black"> Card Type</h5>
              <div className="flex items-center justify-center">
                <img
                  src="Assets/Images/Rectangle 9.png"
                  alt="masterCard"
                  className="object-fill w-[6vw]"
                />
                <img
                  src="Assets/Images/Rectangle 10.png"
                  alt="Visa"
                  className="object-fill w-[6vw]"
                />
                <img
                  src="Assets/Images/Rectangle 11.png"
                  alt="RuPay"
                  className="object-fill w-[6vw]"
                />
                <div className="px-3 border-2 border-black/5 rounded  flex items-center justify-center text-center">
                  <h4 className="text-black w-[vw] flex items-center h-[8vh] justify-center ">
                    See all
                  </h4>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-black  space-y-2  "
              >
                <div>
                  <label className="font-semibold ">Name</label>
                  <input
                    placeholder="Name"
                    className="border-2 rounded-lg  border-white/20  w-full bg-[#272727] text-white px-5 p-2"
                    {...register("exampleRequired", { required: true })}
                  />{" "}
                </div>
                <div>
                  <label className="font-semibold ">Card Number</label>
                  <input
                    placeholder="1111 2222 3333 4444 "
                    type="number"
                    className="border-2 rounded-lg  border-white/20  w-full bg-[#272727] text-white px-5 p-2 flex  "
                    {...register("exampleRequired", { required: true })}
                  />{" "}
                </div>
                <div className="flex w-full items-center justify-between gap-1.5">
                  <div>
                    <label className="font-semibold ">Expiration date</label>
                    <input
                      type="date"
                      className="border-2 rounded-lg  border-white/20  w-full bg-[#272727] text-white px-5 p-2"
                      {...register("exampleRequired", { required: true })}
                    />{" "}
                  </div>
                  <div>
                    <label className="font-semibold ">CVV</label>
                    <input
                      placeholder="123 "
                      type="number"
                      className="border-2 rounded-lg  border-white/20  w-full bg-[#272727] text-white px-5 p-2 flex  "
                      {...register("exampleRequired", { required: true })}
                    />{" "}
                  </div>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
              </form>
              <div className="w-full p-2 border-b-1 mb-2 border-black"></div>
              <div className="w-full space-y-2 mb-3">
                <div className="flex items-center justify-between text-black">
                  <h2>Subtotal</h2>
                  <h2>$21000</h2>
                </div>
                <div className="flex items-center justify-between text-black">
                  <h2>Platform fee</h2>
                  <h2>$4</h2>
                </div>
                <div className="flex items-center justify-between text-black">
                  <h2>Total (Tax incl.)</h2>
                  <h2>$21004</h2>
                </div>
              </div>
              <div className="text-white flex items-center justify-between w-full  cursor-pointer bg-[#F1713D] px-6 p-2 rounded-xl">
                <p>$1,672</p>
                <Button
                  text={"Checkout"}
                  iconR={<FaArrowRightLong className="ml-6 text-2xl" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
