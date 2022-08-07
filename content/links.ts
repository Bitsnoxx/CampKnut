type SocialLinksType = {
  name: string;
  url: string;
  inNavbar?: boolean;
};

export const socials: SocialLinksType[] = [
  {
    name: "Twitch",
    url: "https://twitch.tv/knut",
    inNavbar: true,
  },
  {
    name: "Discord",
    url: "https://discord.gg/knut",
    inNavbar: true,
  },
  {
    name: "Merch",
    url: "https://strms.net/CampKnut",
    inNavbar: true,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/c/Knutspild",
    inNavbar: true,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Knutspild",
    inNavbar: true,
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/r/KnutTwitch/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/knutspild/",
  },
];

export const placeHolderImage = "/404.webp";
