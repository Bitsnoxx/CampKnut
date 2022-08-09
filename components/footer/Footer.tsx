import { useState } from 'react';
import Image from 'next/image';

import {
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaReddit,
  FaShoppingBag,
  FaHeart,
} from 'react-icons/fa';

import FooterIconLink from 'components/footer/FooterIconLink';

import CustomLink from 'components/ui/CustomLink';

export default function Footer() {
  const [counter, setCounter] = useState(0);
  return (
    <footer className="my-8 text-center text-knut-light-text dark:text-knut-dark-text">
      <Image
        width={128 + (counter > 5 ? counter * 3 : 0)}
        height={128 + (counter > 5 ? counter * 3 : 0)}
        alt="Knut"
        src="/knut3head.webp"
        onClick={() => setCounter(counter + 1)}
      />
      <div className="w-full ">
        <div className="mt-4 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">Camp Knut 2022</span>
          <p>
            <CustomLink
              href="/contributors"
              type="Link"
              lightColor={'text-knut-light-header'}
              darkColor={'dark:text-knut-dark-header'}
            >
              Contributors
            </CustomLink>
          </p>
          <div className="text-4xl my-2 flex flex-row items-center justify-center gap-4">
            <FooterIconLink platform="Twitch">
              <FaTwitch className="transition duration-300 hover:text-knut-other-twitch" />
            </FooterIconLink>
            <FooterIconLink platform="Reddit">
              <FaReddit className="transition duration-300 hover:text-knut-other-reddit" />
            </FooterIconLink>
            <FooterIconLink platform="Youtube">
              <FaYoutube className="transition duration-300 hover:text-knut-other-youtube" />
            </FooterIconLink>
            <FooterIconLink platform="Twitter">
              <FaTwitter className="transition duration-300 hover:text-knut-other-twitter" />
            </FooterIconLink>
            <FooterIconLink platform="Instagram">
              <FaInstagram className="transition duration-300 hover:text-knut-other-instagram" />
            </FooterIconLink>
            <FooterIconLink platform="Merch">
              <FaShoppingBag className="transition duration-300 hover:text-knut-other-merch" />
            </FooterIconLink>
          </div>
        </div>
      </div>
      <span className="flex flex-row items-center justify-center gap-1 pb-0.5">
        Made with <FaHeart className="mx-0.5 hover:text-red-600" /> on{' '}
        <CustomLink
          href={'https://github.com/Bitsnoxx/CampKnut'}
          type={'a'}
          darkColor={'dark:text-knut-dark-header'}
          lightColor={'text-knut-light-header'}
        >
          Github
        </CustomLink>
      </span>
    </footer>
  );
}
