import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-10 h-10 rounded-full border-t-2 border-b-2 border-t-blue-500 border-b-purple-500 animate-spin"></div>
    </div>
  );
};

export default Loader;
