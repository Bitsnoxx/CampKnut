import {
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaReddit,
  FaShoppingBag,
  FaHeart,
} from "react-icons/fa";

import Image from "next/image";
import FooterIconLink from "./FooterIconLink";
import { useState } from "react";
import CustomLink from "../ui/CustomLink";

export default function Footer() {
  const [counter, setCounter] = useState(0);
  return (
    <footer className="text-center text-knut-light-text dark:text-knut-dark-text my-8">
      <Image
        width={128 + (counter > 5 ? counter * 3 : 0)}
        height={128 + (counter > 5 ? counter * 3 : 0)}
        alt="Knut"
        src="/knut3head.webp"
        onClick={() => setCounter(counter + 1)}
      />
      <div className="w-full ">
        <div className="flex flex-col items-center justify-center mt-4">
          <span className="text-xl font-bold">Camp Knut 2022</span>
          <div className="flex flex-row justify-center items-center text-4xl gap-4 my-2">
            <FooterIconLink platform="Twitch">
              <FaTwitch className="hover:text-knut-other-twitch transition duration-300" />
            </FooterIconLink>
            <FooterIconLink platform="Reddit">
              <FaReddit className="hover:text-knut-other-reddit transition duration-300" />
            </FooterIconLink>
            <FooterIconLink platform="Youtube">
              <FaYoutube className="hover:text-knut-other-youtube transition duration-300" />
            </FooterIconLink>
            <FooterIconLink platform="Twitter">
              <FaTwitter className="hover:text-knut-other-twitter transition duration-300" />
            </FooterIconLink>
            <FooterIconLink platform="Instagram">
              <FaInstagram className="hover:text-knut-other-instagram transition duration-300" />
            </FooterIconLink>
            <FooterIconLink platform="Merch">
              <FaShoppingBag className="hover:text-knut-other-merch transition duration-300" />
            </FooterIconLink>
          </div>
        </div>
      </div>
      <span className="flex flex-row items-center gap-1 justify-center pb-0.5">
        Made with <FaHeart className="hover:text-red-600 mx-0.5" /> on{" "}
        <CustomLink
            href={"https://github.com/Bitsnoxx/CampKnut"}
            type={"a"}
            darkColor={"dark:text-knut-dark-header"}
            lightColor={"text-knut-light-header"}
        >
          Github
        </CustomLink>
      </span>
    </footer>
  );
}
