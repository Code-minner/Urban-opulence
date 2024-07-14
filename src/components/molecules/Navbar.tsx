"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import IconButton from "../atom/IconButton";
import { BiMenu, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import Button from "../atom/Button";

const menu = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About Us",
    route: "/about-us",
  },
  {
    title: "Portfolio Gallery",
    route: "/portfolio",
  },
  {
    title: "Contact Us",
    route: "/contact",
  },
  {
    title: "AI",
    route: "/ai",
  },

  // {
  //   title: "Our Projects",
  //   route: "/projects",
  //   subMenu: [
  //     {
  //       title: "Male Wears",
  //       route: "/projects/male",
  //     },
  //     {
  //       title: "Female Wears",
  //       route: "/projects/male",
  //     },
  //     {
  //       title: "Children Wears",
  //       route: "/projects/male",
  //     },
  //     {
  //       title: "LGBTQ Wears 😅",
  //       route: "/projects/female",
  //     },
  //   ],
  // },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" px-4 hidden lg:flex bg-white py-3 rounded-full flex-center">
        <ul className=" flex-center  gap-x-6 font-satoshi font-normal">
          {menu.map((item, index) => (
            <a key={index} href={item.route}>
              <li className={` relative   cursor-pointer  `}>
                <div
                  className={` ${
                    pathname === item.route ? "text-primary" : "text-black"
                  } flex-center group gap-x-1 relative z-50 text-gray-800 hover:text-primary  `}
                >
                  {item.title}
                  {item.title === "AI" && (
                    <div className="  duration-300 text-xs text-white p-1 px-2 rounded-full bg-[#FF0000]">
                      New
                    </div>
                  )}
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>

      <div className=" lg:hidden">
        {open ? (
          <IconButton
            onClick={() => setOpen(false)}
            icon={<BiX size={35} />}
            className="mt-1"
          />
        ) : (
          <IconButton
            icon={<BiMenu size={30} className="mt-1" />}
            onClick={() => setOpen(true)}
          />
        )}
        <motion.div
          initial={{
            visibility: "hidden",
            y: 20,
            opacity: 0,
          }}
          animate={{
            visibility: open ? "visible" : "hidden",
            y: open ? 0 : 20,
            opacity: open ? 1 : 0,
          }}
          className=" fixed w-full h-screen bg-white top-0 left-0  -z-10"
        >
          <ul className=" text-2xl font-satoshi flex flex-col justify-center items-center gap-10 pt-40">
            {menu.map((item, index) => (
              <motion.a
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: open ? 1 : 10,
                  opacity: open ? 1 : 0,
                  transition: {
                    delay: open ? index / 7 : 0,
                  },
                }}
                key={index}
                href={item.route}
              >
                <li className={` relative   cursor-pointer  `}>
                  <div
                    className={` ${
                      pathname === item.route ? "text-primary" : "text-black"
                    } flex-center group gap-x-1 relative z-50 text-gray-800 hover:text-primary  `}
                  >
                    {item.title}
                    {item.title === "AI" && (
                      <div className="  duration-300 text-xs text-white p-1 px-2 rounded-full bg-[#FF0000]">
                        New
                      </div>
                    )}
                  </div>
                </li>
              </motion.a>
            ))}
            <Button className="  text-base font-satoshi  px-5">
              Explore Store
            </Button>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

// incase we want to reuse submenu

// <li
// className={`${
//   item?.subMenu && "group"
// }  relative text-gray-800 hover:text-primary   cursor-pointer  `}
// >
// <div
//   className={` ${
//     pathname === item.route ? "text-primary" : "text-black"
//   } ${
//     item?.subMenu && "peer"
//   } flex-center gap-x-1 relative z-50 `}
// >
//   {item.title}
//   {item.subMenu && (
//     <span className=" group-hover:rotate-180 duration-300">
//       <BiChevronDown size={20} />
//     </span>
//   )}
// </div>
// {item.subMenu && (
//   <div className="  invisible peer-hover:visible hover:visible opacity-0  hover:opacity-100 peer-hover:opacity-100  z-[10]  duration-300 hover:translate-y-0 peer-hover:translate-y-0 -translate-y-10 mt-3 rounded-xl border-[0.2px] top-6  min-w-[200px] left-0  bg-white absolute p-2 shadow ">
//     <ul className="column-start gap-y-1  relative">
//       <span className="w-4 h-4 bg-white  border-t border-l absolute left-2 -top-4 rotate-45"></span>
//       {item.subMenu?.map((subItem, index) => (
//         <li
//           className=" cursor-pointer w-full p-2 text-black rounded-lg hover:bg-gray-100"
//           key={index}
//         >
//           {subItem.title}
//         </li>
//       ))}
//     </ul>
//   </div>
// )}
// </li>
export default Navbar;
