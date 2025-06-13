
import React, { useState } from "react";

const Sign_in = () => {
 const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row ">
      {/* Left Panel: Form Area */}
      <div
        id="left"
        className="w-full lg:w-1/2 bg-neutral-900 text-white  flex flex-col justify-center    p-10 rounded-4xl"
      >
        {/* Logo and Heading */}
        <div className=" px-3 pt-12">
          <div className="mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-md mb-6"></div>
            <h2 className="text-3xl font-bold">Sign In</h2>
            <p className="mt-2 text-sm text-gray-400">
              Don’t have an account? <a href="#" className="underline">Sign Up</a>
            </p>
          </div>
        </div>

        {/* Notification */}
        {showNotification && (
          <div className="bg-neutral-800 text-sm p-4 rounded-md flex justify-between items-center mb-6">
            <span>
              💡 Welcome to Tailwise demo! Simply click Sign In to explore and access our documentation.
            </span>
            <button
              onClick={() => setShowNotification(false)}
              className="ml-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        )}

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email*</label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full px-4 py-2 bg-neutral-800 text-white border border-neutral-700 rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password*</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-neutral-800 text-white border border-neutral-700 rounded"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" /> Remember me
            </label>
            <a href="#" className="text-gray-400 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-2 rounded-full font-semibold hover:opacity-90">
            Sign In
          </button>
          <button className="w-full bg-neutral-800 py-2 rounded-full font-semibold hover:opacity-90">
            Sign Up
          </button>
        </form>
      </div>

      {/* Right Panel: Hidden on small screens */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-r from-blue-800 to-blue-200 text-white p-12 flex-col justify-center">
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Embrace Excellence <br /> in Dashboard Development
        </h1>
        <p className="text-lg max-w-md text-blue-100">
          Unlock the potential of Tailwise. Build stunning, structured dashboards using Tailwind & React.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex -space-x-2">
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="User 1"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User 2"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User 3"
            />
          </div>
          <p className="text-sm">Over 7k+ strong and growing!</p>
        </div>
      </div>
    </div>
  );
}

export default Sign_in
