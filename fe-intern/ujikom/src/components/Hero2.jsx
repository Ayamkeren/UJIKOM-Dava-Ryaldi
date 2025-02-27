import React from "react";

const Hero2 = () => {
  return (
    <div className="bg-gray-200 py-7 overflow-x-hidden mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
              Fast and Easy Service
            </h3>
            <p className="text-gray-600">
              We provide quick and hassle-free services to ensure your
              satisfaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Free Shipping and Returns
            </h3>
            <p className="text-gray-600">
            Enjoy free shipping on all orders and easy returns within 30 days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cash Paid Direct
            </h3>
            <p className="text-gray-600">
              Get paid directly in cash for your items with no hidden fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;