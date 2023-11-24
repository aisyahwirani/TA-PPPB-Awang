import Image from "next/image";
import Meta from "./components/Meta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import banner from "../public/assets/banner.webp";


export default function about() {
  return (
    <div>
      <Meta title="Resep Kostan: About" />
      <Header />
      <section className="text-gray-600 body-font bg-amber-50 py-10">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="banner"
                className="object-cover object-center h-full w-full"
                src={banner}
                width="1200"
                height="500"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image alt="awang" src={} width="80" height="80" />
                </div> */}
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Aisyah Wirani Sriwangsa (21120121130079)
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Mahasiswa Teknik Komputer Angkatan 2021 Fakultas Teknik Universitas Diponegoro
                    yang sedang mengerjakan banyak sekali tugas tugas duniawi
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                Resep Kostan: Aplikasi resep makanan agar memudahkan saya sebagai anak kost yang tidak bisa memasak.
                Aplikasi ini berisi berbagai resep makanan yang enak, lezat, dan mungkin bergizi
                hehe
                </p> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
