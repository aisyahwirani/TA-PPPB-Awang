
import Image from "next/image";
import Link from "next/link";
import icon from "../../public/assets/icon.png";

export default function Header() {
  return (
    <header className="sticky top-0 text-gray-900 body-font z-50 bg-green-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image alt="icon" src={icon} width="40" height="40" />
          <span className="ml-3 text-xl">
            Resep Kostan</span>
        </Link>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
            <a
              href="https://www.instagram.com/awngsa/"
              className="ml-3 text-gray-400  hover:text-gray-900"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
    </header>
  );
}
