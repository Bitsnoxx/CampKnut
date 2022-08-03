export type StreamerInfoType = {
  name: string;
  url: string;
  twitchName?: string;
};

export type ParticipantsType = {
  category: string;
  members: StreamerInfoType[];
};

const knut: StreamerInfoType = {
  name: "Knut",
  url: "https://www.twitch.tv/knut",
  twitchName: "knut",
};

const wakewilder: StreamerInfoType = {
  name: "WakeWilder",
  url: "https://www.twitch.tv/wakewilder",
  twitchName: "wakewilder",
};

export const participants: ParticipantsType[] = [
  {
    category: "trainers",
    members: [knut, wakewilder],
  },
  {
    category: "streamers",
    members: [
      {
        name: "Mizkif",
        url: "https://www.twitch.tv/mizkif",
        twitchName: "mizkif",
      },
      {
        name: "Nmplol",
        url: "https://www.twitch.tv/Nmplol",
        twitchName: "Nmplol",
      },
      {
        name: "Cyr",
        url: "https://twitch.tv/cyr",
        twitchName: "cyr",
      },
      {
        name: "RichwCampbell",
        url: "https://www.twitch.tv/richwcampbell",
        twitchName: "richwcampbell",
      },
      {
        name: "Tectone",
        url: "https://www.twitch.tv/tectone",
        twitchName: "Tectone",
      },
      {
        name: "Erobb221",
        url: "https://www.twitch.tv/erobb221",
        twitchName: "erobb221",
      },
      {
        name: "EsfandTV",
        url: "https://www.twitch.tv/esfandtv",
        twitchName: "EsfandTV",
      },
      {
        name: "Lacari",
        url: "https://www.twitch.tv/Lacari",
        twitchName: "Lacari",
      },
    ],
  },
  {
    category: "chefs",
    members: [
      {
        name: "Exxzy",
        url: "https://www.twitch.tv/exxzy",
        twitchName: "exxzy",
      },
    ],
  },
  {
    category: "guests",
    members: [
      {
        name: "MitchJones",
        url: "https://www.twitch.tv/mitchjones",
        twitchName: "mitchjones",
      },
    ],
  },
  {
    category: "judges",
    members: [
      knut,
      wakewilder,
      {
        name: "Malena",
        url: "https://www.twitch.tv/malena",
        twitchName: "malena",
      },
      {
        name: "Asmongold",
        url: "https://www.twitch.tv/asmongold",
        twitchName: "Asmongold",
      },
    ],
  },
];
