import React from "react";
import IconButton from "../atom/IconButton";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Searchbar() {
  return (
    <div className=" bg-gray-200 font-satoshi h-10 rounded-full flex-center gap-0 px-3 gap-x-2  flex-1">
      <IconButton icon={<FaMagnifyingGlass className=" text-gray-500" />} />
      <input
        type="text"
        placeholder="Search for products"
        className="flex-1 h-full bg-transparent placeholder:text-gray-600 outline-none"
      />
    </div>
  );
}

export default Searchbar;
