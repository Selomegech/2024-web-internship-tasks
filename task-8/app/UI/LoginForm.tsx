import React from "react";

const Loginform = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="flex-col items-center justify-center w-[30%] h-24  ">
        <form>
          <div className="flex justify-center my-4 ">
            <h1 className=" font-bold text-4xl text-gray-800 ">Welcome back,</h1>
          </div>
          <div className="flex  space-x-4 justify-between my-10">
            <div className="w-24 h-1 bg-gray-200"></div>
            <div className="w-24 h-1 bg-gray-200"></div>
          </div>
          <div className="my-10">
            <label className="block font-bold mb-2 text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-200 border-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-14"
              placeholder="Enter emal address"
              required
            />
          </div>
          <div className="my-10">
            <label className="block font-bold mb-2 text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border-gray-200  border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-14"
              placeholder="Enter passsword"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-900"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
