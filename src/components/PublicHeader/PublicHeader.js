import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { LuLogIn } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function PublicHeader() {
  return (
    <header className="shadow text-neutral">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/images/logo/logo_dark.png"
              alt=""
              className="w-48"
              width={500}
              height={500}
            />
          </Link>

          <ul className="flex gap-2">
            <li>
              <Link href="">
                Services <MdKeyboardArrowDown className="text-lg" />
              </Link>

              <ul className="dropdown left-0 border_hover">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
                  <li>
                    <Link href="">
                      <div className="flex gap-2 items-center">
                        <span className="border w-9 h-9 rounded flex justify-center items-center"></span>
                        <div>
                          <h1>Parcel</h1>
                          <p className="text-xs italic text-neutral-content">
                            Delivery at your Doorstep
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <div className="flex gap-2 items-center">
                        <span className="border w-9 h-9 rounded flex justify-center items-center"></span>
                        <div>
                          <h1>Parcel</h1>
                          <p className="text-xs italic text-neutral-content">
                            Delivery at your Doorstep
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <div className="flex gap-2 items-center">
                        <span className="border w-9 h-9 rounded flex justify-center items-center"></span>
                        <div>
                          <h1>Parcel</h1>
                          <p className="text-xs italic text-neutral-content">
                            Delivery at your Doorstep
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <div className="flex gap-2 items-center">
                        <span className="border w-9 h-9 rounded flex justify-center items-center"></span>
                        <div>
                          <h1>Parcel</h1>
                          <p className="text-xs italic text-neutral-content">
                            Delivery at your Doorstep
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <div className="flex gap-2 items-center">
                        <span className="border w-9 h-9 rounded flex justify-center items-center"></span>
                        <div>
                          <h1>Parcel</h1>
                          <p className="text-xs italic text-neutral-content">
                            Delivery at your Doorstep
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <div className="flex gap-2 items-center">
                        <span className="border w-9 h-9 rounded flex justify-center items-center"></span>
                        <div>
                          <h1>Parcel</h1>
                          <p className="text-xs italic text-neutral-content">
                            Delivery at your Doorstep
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <Link href="">Coverage Area</Link>
            </li>
            <li>
              <Link href="">Charges</Link>
            </li>
            <li>
              <Link href="">
                More <MdKeyboardArrowDown className="text-lg" />
              </Link>

              <ul className="dropdown hover_left">
                <li>
                  <Link href="">About US</Link>
                </li>
                <li>
                  <Link href="">Contact US</Link>
                </li>
                <li>
                  <Link href="">Career</Link>
                </li>
                <li>
                  <Link href="">Earn with QuickMove</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="flex gap-1 items-center">
            <li>
              <Link href="" className="flex gap-1 items-center">
                <LuLogIn className="text-[15px]" />
                Login
              </Link>
            </li>
            <li className="py-2">
              <div className="w-px h-5 bg-neutral-content"></div>
            </li>
            <li>
              <LanguageDropdown />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
