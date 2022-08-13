import fs from 'fs';
import matter from 'gray-matter';

import exercises from 'content/exercises.json';
import { IWorkoutData } from 'model/workout';

export const getExercise = (slug: string | string[] | undefined) => {
  return exercises.items.find((exercise) => exercise.slug === slug);
};

export const getAllExercises = () => exercises.items;

export const getWorkouts = () => {
  const files = fs.readdirSync('./pages/workout').filter((file) => file.includes('.mdx'));

  let workoutData: IWorkoutData[] = [];

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const file = fs.readFileSync(`./pages/workout/${f}`, 'utf8');
    const matterObj = matter(file);
    const data = matterObj.data as IWorkoutData;
    if (data.filename && data.title) {
      workoutData.push({
        ...data,
        filename: data.filename.replace('.mdx', ''),
      });
    }
  }
  return workoutData;
};
