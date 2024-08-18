"use client";

import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex flex-row mt-10 sm:flex-row justify-between w-full px-10 py-4 sm:px-24 sm:py-6 items-center border-b dark:border-zinc-800 border-zinc-200">
      <div className="w-full sm:flex flex-row justify-between gap-10 items-center">
        <div className=" text-sm flex flex-row items-center justify-between gap-2">
          Powered By : <FaReact /> <RiNextjsFill />
        </div>
        <div className="text-xs dark:text-zinc-400 text-zinc-600">
          Copyright © Karthik 2024 All rights Reserved
        </div>
      </div>
    </div>
  );
}
