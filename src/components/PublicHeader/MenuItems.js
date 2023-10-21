import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function MenuItems() {
  return (
    <>
      <li>
        <Link href="">
          Services <MdKeyboardArrowDown className="text-lg" />
        </Link>
        <ul className="dropdown border_hover">
          <div className="grid lg:grid-cols-2 gap-4 lg:p-4">
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
    </>
  );
}
