import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/favicon.ico"
            alt="MetaVerse"
            width={36}
            height={36}
            className="mr-3"
          />
          <span className="text-xl font-bold">MetaVerse</span>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="#metaverse-intro"
                className="hover:text-blue-400 transition-colors"
              >
                소개
              </Link>
            </li>
            <li>
              <Link
                href="#virtual-experiences"
                className="hover:text-blue-400 transition-colors"
              >
                가상경험
              </Link>
            </li>
            <li>
              <Link
                href="#future-tech"
                className="hover:text-blue-400 transition-colors"
              >
                기술
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                시작하기
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
