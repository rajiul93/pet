"use client";

import { Button } from "@/component/material-tailwind/material-tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
const MaiNavbar = (props) => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const pathname = usePathname();

  return (
    <header className=" bg-blue-gray-200">
      <div className="hidden md:block">
        <nav className=" container mx-auto flex justify-between items-center py-2 ">
          <h1 color="amber" className="text-[#dc2626] text-3xl font-extrabold ">
            Pet Express
          </h1>
          <div className="flex gap-7 items-center">
            <ul className="flex gap-4">
              <Link href="/"><li>Home</li></Link>
              <Link href="/cat"><li>{props.category[0].name.toUpperCase()}</li></Link>
              <Link href="/dog"><li>{props.category[1].name.toUpperCase()}</li></Link> 

              {/* {
                props.category.slice(0,3).map((item, i)=>    <Link key={i} href="/">
                
                <li
                  className={
                    pathname === "/cat"
                      ? "  cursor-pointer text-red-500"
                      : "  cursor-pointer"
                  }
                >
                  {item.name.toUpperCase()}
                </li>
              </Link>   )
              } */}
           

            </ul>

            <Button variant="outlined" className=" font-semibold">
              Log in
            </Button>
          </div>
        </nav>
      </div>
      <div className="md:hidden relative  ">
        <nav className="container mx-auto flex justify-between items-center p-2  bg-blue-gray-200 ">
          <h1 color="amber" className="text-[#dc2626] text-2xl font-extrabold ">
            Pet Express
          </h1>

          <div className="flex items-center gap-2">
            <Button variant="outlined" className=" font-semibold">
              Log in
            </Button>
            <CiMenuBurger
              onClick={() => setOpenNav(!openNav)}
              className="text-4xl"
            />
          </div>
        </nav>
      </div>
      {openNav ? (
        <div className="w-full absolute bg-gray-500 z-30 ">
          <ul className="flex flex-col  gap-4 p-2">
            <li className=" font-semibold cursor-pointer  ">Home</li>
            <li className=" font-semibold cursor-pointer">Cat</li>
            <li className=" font-semibold cursor-pointer">Dog</li>
            <li className=" font-semibold cursor-pointer">Parrots</li>
            <li className=" font-semibold cursor-pointer">Cockatiel</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default MaiNavbar;
