import exercises from "../content/exercises.json";

export const getExercise = (slug: string | string[] | undefined) => {
  return exercises.items.find((exercise) => exercise.slug === slug);
};

export const getAllExercises = () => exercises.items;
