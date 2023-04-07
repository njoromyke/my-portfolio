import React from "react";

const Home = () => {
  return (
    <div className=" h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 text-white py-4 px-8 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700">
      <h1 className="text-4xl font-bold mb-4">Dark Gradient Background</h1>
      <p className="text-lg">This is an example of a dark gradient background using Tailwind CSS in dark mode variant.</p>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 mt-4 rounded">Button</button>
    </div>
  );
};

export default Home;
