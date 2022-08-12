export type ContributorType = {
  category: string;
  members: ContributorInfoType[];
};

export type ContributorInfoType = {
  username: string;
  help: string;
};

export const contributors: ContributorType[] = [
  {
    category: 'Stallions',
    members: [
      { username: 'perryd01', help: 'Developer' },
      { username: 'jsweazy', help: 'Developer' },
      { username: 'RealIndrit', help: 'Developer' },
      { username: 'GisliNielsen', help: 'Developer' },
      { username: 'amsuarez99', help: 'Developer' },
      { username: 'SpicyTakis', help: 'Developer' },
      { username: 'Aakara', help: 'Developer' },
    ],
  },
  {
    category: 'Graphics',
    members: [
      { username: 'thorstendenk', help: 'Main picture on front page' },
      { username: 'vegardand', help: 'Calendar image' },
    ],
  },
  {
    category: 'Maintainers',
    members: [
      { username: 'Tahtooz', help: 'Spotify playlist, OCD' },
      { username: 'DrStone', help: 'Workout log' },
    ],
  },
  {
    category: 'Fixes',
    members: [
      { username: 'Freelancer', help: 'Workout page' },
      { username: 'TheBigWall', help: 'Calendar entries' },
      { username: 'JigaPlank', help: 'Exercises, Design' },
      { username: 'WaYa', help: 'Tip' },
      { username: 'Shatty', help: 'Feedback' },
      { username: 'Coleslaw', help: 'Exercises' },
      { username: 'xxtransience', help: 'Exercises' },
      { username: 'Ivarsen', help: 'Exercises' },
      { username: 'tyler718', help: 'Exercises' },
      { username: 'trumanblack', help: 'Fix' },
      { username: 'Vizumn', help: 'Fix' },
      { username: 'Hubert', help: 'Fix' },
      { username: 'Bakalaka', help: 'Design' },
    ],
  },
];
