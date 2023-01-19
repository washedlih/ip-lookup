import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex justify-center items-center mt-8 max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto z-40 -mb-48 md:-mb-48 lg:-mb-20 relative">
      <div className="bg-white rounded-xl justify-center shadow gap-4 md:gap-8 p-4 md:p-8 grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-5 md:text-left w-full">
        <div className="flex flex-col lg:border-r border-slate-400">
          <h2 className="text-gray-500 font-bold text-sm">IP ADDRESS</h2>
          <p className="mt-2 font-bold md:text-xl">{data.ip ? data.ip : "204.150.174.174"}</p>
        </div>
        <div className="flex flex-col lg:border-r border-slate-400 lg:col-span-2">
          <h2 className="text-gray-500 font-bold text-sm">LOCATION</h2>
          <p className="mt-2 font-bold md:text-xl">{`${data.city ? data.city : "Malden"}, ${
            data.regionName ? data.regionName : "Massachusetts"
          } ${data.zip ? data.zip : "02148"}`}</p>
        </div>
        <div className="flex flex-col lg:border-r border-slate-400">
          <h2 className="text-gray-500 font-bold text-sm">COUNTRY</h2>
          <p className="mt-2 font-bold md:text-xl">{data.country ? data.country : "United States"}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-gray-500 font-bold text-sm">ISP</h2>
          <p className="mt-2 font-bold md:text-xl">{data.isp ? data.isp : "Verizon Communications"}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
