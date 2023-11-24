import list from "../../public/assets/list.webp";
import Link from "next/link";
import Image from "next/image";
import dish from "../../public/assets/link.webp";
import info from "../../public/assets/info.webp";
import faq from "../../public/assets/faq.webp";

export default function Footer() {
  return (
    <footer class="sticky bottom-0 text-gray-600 body-font z-50 bg-green-300">
      <div class="container px-3 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
          <Link href="/" className="flex title-font font-sm items-center text-black  hover:text-gray-900 mb-4 mr-3 md:mb-0 hover:opacity-70 transition duration-300 ease-in-out">
          <Image alt="list" src={list} width="20" height="0" />
            <h1 className="ml-2">List </h1>
          </Link>
          <Link href="/references" className="flex title-font font-sm items-center text-black  hover:text-gray-900 mb-4 mr-3 md:mb-0 hover:opacity-70 transition duration-300 ease-in-out">
          <Image alt="dish" src={dish} width="20" height="20" />
              <h1 className="ml-2">Dish </h1>
          </Link>
          <Link href="/faq" className="flex title-font font-sm items-center text-black  hover:text-gray-900 mb-4 mr-3 md:mb-0 hover:opacity-70 transition duration-300 ease-in-out " >
          <Image alt="info" src={faq} width="20" height="20" />
              <h1 className="ml-2">Review  </h1>
          </Link>
          <Link href="/about" className="flex title-font font-sm items-center text-black  hover:text-gray-900 mb-4 mr-3 md:mb-0 hover:opacity-70 transition duration-300 ease-in-out">
          <Image alt="profile" src={info} width="20" height="20" />
               <h1 className="ml-2">About </h1>
          </Link>
        </div>
      </div>
    </footer>
  );
}
