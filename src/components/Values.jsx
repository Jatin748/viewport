import React from "react";

const Values = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-10">
      <div className="space-y-7">
        <div className="flex items-center justify-center">
          <p className="uppercase text-sm font-semibold text-[#4d4dff] bg-[#4d4dff26] text-center px-2 py-1 rounded-lg">
            values
          </p>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-extrabold text-center">
            We don't do ads or algorithms
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 cursor-grab">
        <div className="bg-[#f1f3f5] p-10 space-y-5">
          <div className="flex items-center justify-center">
            <img src="/mountain.png" alt="" className="w-[60px] h-[60px]" />
          </div>
          <div className="text-lg font-bold text-center">
            Content over likes
          </div>
        </div>
        <div className="bg-[#f1f3f5] p-10 space-y-5">
          <div className="flex items-center justify-center">
            <img src="/mountain.png" alt="" className="w-[60px] h-[60px]" />
          </div>
          <div className="text-lg font-bold text-center">
            Content over likes
          </div>
        </div>
        <div className="bg-[#f1f3f5] p-10 space-y-5">
          <div className="flex items-center justify-center">
            <img src="/mountain.png" alt="" className="w-[60px] h-[60px]" />
          </div>
          <div className="text-lg font-bold text-center">
            Content over likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
