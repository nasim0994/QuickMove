import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

export default function MobileMenu({ setMobileMenu, mobileMenu }) {
  const [services, setServices] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileMenu(false)}
        className={`menu_overlay ${mobileMenu && "menu_overlay_show"}`}
      ></button>

      <div className={`mobile_menu_wrap  ${mobileMenu && "mobile_menu_show"}`}>
        <ul className="mobile_menu pt-3">
          <li>
            <button onClick={() => setServices(!services)}>
              Services <MdKeyboardArrowDown className="text-lg" />
            </button>
            <ul className={`services ${services && "services_show"}`}>
              <li>
                <Link href="" onClick={() => setMobileMenu(false)}>
                  <div className="flex gap-2 items-center">
                    <span className="icon"></span>
                    <div>
                      <h1>Parcel</h1>
                      <p>Delivery at your Doorstep</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="" onClick={() => setMobileMenu(false)}>
                  <div className="flex gap-2 items-center">
                    <span className="icon"></span>
                    <div>
                      <h1>Parcel</h1>
                      <p>Delivery at your Doorstep</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="" onClick={() => setMobileMenu(false)}>
                  <div className="flex gap-2 items-center">
                    <span className="icon"></span>
                    <div>
                      <h1>Parcel</h1>
                      <p>Delivery at your Doorstep</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="" onClick={() => setMobileMenu(false)}>
                  <div className="flex gap-2 items-center">
                    <span className="icon"></span>
                    <div>
                      <h1>Parcel</h1>
                      <p>Delivery at your Doorstep</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="" onClick={() => setMobileMenu(false)}>
                  <div className="flex gap-2 items-center">
                    <span className="icon"></span>
                    <div>
                      <h1>Parcel</h1>
                      <p>Delivery at your Doorstep</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="" onClick={() => setMobileMenu(false)}>
                  <div className="flex gap-2 items-center">
                    <span className="icon"></span>
                    <div>
                      <h1>Parcel</h1>
                      <p>Delivery at your Doorstep</p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="" onClick={() => setMobileMenu(false)}>
              Coverage Area
            </Link>
          </li>
          <li>
            <Link href="" onClick={() => setMobileMenu(false)}>
              Charges
            </Link>
          </li>
          <li>
            <Link href="" onClick={() => setMobileMenu(false)}>
              About US
            </Link>
          </li>
          <li>
            <Link href="" onClick={() => setMobileMenu(false)}>
              Contact US
            </Link>
          </li>
          <li>
            <Link href="" onClick={() => setMobileMenu(false)}>
              Career
            </Link>
          </li>
          <li>
            <Link href="" onClick={() => setMobileMenu(false)}>
              Earn with QuickMove
            </Link>
          </li>
          <li>
            <LanguageDropdown />
          </li>
        </ul>
      </div>
    </div>
  );
}
