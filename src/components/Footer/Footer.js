import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-3 bg-secondary text-base-100/80">
      <div className="container">
        <div className="sm:flex justify-between items-center text-sm font-light">
          <p>QuickMove © 2023 All Rights Reserved Made by Nuaim</p>

          <ul className="flex gap-6">
            <li>
              <Link href="" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
