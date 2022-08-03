import {
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaReddit,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center text-white mt-8">
      <Image width={128} height={128} alt="Knut" src="/knut3head.avif" />
      <div className="container px-6 pt-6">
        <div className="flex justify-center mb-6 space-y-4">
          <div className="justify-items-center inline-flex">
            <FaTwitch className="inline-flex	" color="#9146FF" size={42} />
            <FaReddit className="inline-flex	" size={42} />
            <FaYoutube className="inline-flex	" color="#FF0000" size={42} />
            <FaTwitter className="inline-flex	" color="#1DA1F2" size={42} />
            <FaInstagram className="inline-flex	" size={42} />
          </div>
        </div>
      </div>
      <span>
        Made with 💖 on{" "}
        <a className="font-bold" href="https://github.com/Bitsnoxx/CampKnut">
          Github
        </a>
      </span>
    </footer>
  );
}
