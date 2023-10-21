"use client";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { LuLogIn } from "react-icons/lu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MenuItems from "./MenuItems";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function PublicHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="shadow text-neutral">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/images/logo/logo_dark.png"
              alt=""
              className="w-36 sm:w-48"
              width={500}
              height={500}
            />
          </Link>

          <ul className="hidden lg:flex gap-2">
            <MenuItems />
          </ul>

          <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />

          <ul className="flex gap-1 items-center">
            <li>
              <Link href="" className="flex gap-1 items-center py-4">
                <LuLogIn className="text-[15px]" />
                Login
              </Link>
            </li>
            <li className="py-2">
              <div className="w-px h-5 bg-neutral-content"></div>
            </li>
            <li className="hidden lg:block">
              <LanguageDropdown />
            </li>
            <li className="lg:hidden">
              <button
                onClick={() => setMobileMenu(true)}
                className="text-[22px] p-2 pr-0"
              >
                <HiOutlineMenuAlt3 />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
