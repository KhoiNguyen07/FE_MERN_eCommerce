import React from "react";
import ReactDOM from "react-dom";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>,
    document.body
  );
};

export default Loading;
