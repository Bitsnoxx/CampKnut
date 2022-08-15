export type StreamerInfoType = {
  twitchId: number;
  name: string;
  url: string;
  twitchName: string;
};

export type ParticipantsType = {
  category: string;
  members: StreamerInfoType[];
};

const knut: StreamerInfoType = {
  twitchId: 43494917,
  name: 'Knut',
  url: 'https://www.twitch.tv/knut',
  twitchName: 'knut',
};

const wakewilder: StreamerInfoType = {
  twitchId: 526832402,
  name: 'WakeWilder',
  url: 'https://www.twitch.tv/wakewilder',
  twitchName: 'wakewilder',
};

export const participants: ParticipantsType[] = [
  {
    category: 'trainers',
    members: [knut, wakewilder],
  },
  {
    category: 'streamers',
    members: [
      {
        twitchId: 94753024,
        name: 'Mizkif',
        url: 'https://www.twitch.tv/mizkif',
        twitchName: 'mizkif',
      },
      {
        twitchId: 21841789,
        name: 'Nmplol',
        url: 'https://www.twitch.tv/Nmplol',
        twitchName: 'nmplol',
      },
      {
        twitchId: 37522866,
        name: 'Cyr',
        url: 'https://twitch.tv/cyr',
        twitchName: 'cyr',
      },
      {
        twitchId: 127463427,
        name: 'RichWCampbell',
        url: 'https://www.twitch.tv/richwcampbell',
        twitchName: 'richwcampbell',
      },
      {
        twitchId: 27717340,
        name: 'Tectone',
        url: 'https://www.twitch.tv/tectone',
        twitchName: 'tectone',
      },
      {
        twitchId: 96858382,
        name: 'Erobb221',
        url: 'https://www.twitch.tv/erobb221',
        twitchName: 'erobb221',
      },
      {
        twitchId: 38746172,
        name: 'EsfandTV',
        url: 'https://www.twitch.tv/esfandtv',
        twitchName: 'esfandtv',
      },
      {
        twitchId: 29400754,
        name: 'Lacari',
        url: 'https://www.twitch.tv/Lacari',
        twitchName: 'lacari',
      },
    ],
  },
  {
    category: 'chefs',
    members: [
      {
        twitchId: 68090599,
        name: 'Exxzy',
        url: 'https://www.twitch.tv/exxzy',
        twitchName: 'exxzy',
      },
    ],
  },
  {
    category: 'guests',
    members: [
      {
        twitchId: 26194208,
        name: 'MitchJones',
        url: 'https://www.twitch.tv/mitchjones',
        twitchName: 'mitchjones',
      },
      {
        twitchId: 32491081,
        name: 'Malena',
        url: 'https://www.twitch.tv/malena',
        twitchName: 'malena',
      },
      {
        twitchId: 192133946,
        name: 'Jeanette',
        url: 'https://www.twitch.tv/jeanetteiswatching',
        twitchName: 'jeanetteiswatching',
      },
      {
        twitchId: 503310135,
        name: 'HafthorJulius',
        url: 'https://www.twitch.tv/hafthorjulius',
        twitchName: 'hafthorjulius',
      },
      {
        twitchId: 31069476,
        name: 'dCapio',
        url: 'https://www.twitch.tv/dcapio',
        twitchName: 'dcapio',
      },
    ],
  },
  {
    category: 'judges',
    members: [
      knut,
      wakewilder,
      {
        twitchId: 32491081,
        name: 'Malena',
        url: 'https://www.twitch.tv/malena',
        twitchName: 'malena',
      },
      {
        twitchId: 26261471,
        name: 'Asmongold',
        url: 'https://www.twitch.tv/asmongold',
        twitchName: 'asmongold',
      },
    ],
  },
];
