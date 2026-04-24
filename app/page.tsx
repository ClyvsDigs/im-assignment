"use client";

export default function Home() {
  return (
    <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-md">

  {/* Logo */}
  <img src="/google.svg" className="w-48 mx-auto mb-6" alt="Google Logo" />

  <h1 className="text-2xl font-semibold text-center mb-6">
    Sign in
  </h1>
        <p className="text-center text-gray-500 mb-6">
          Use your Google Account
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email or phone"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Sign In Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Sign in
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-[16px] h-[16px]"
          />
          Sign in with Google
        </button>
        

      </div>
    
  );
}