import { Entry } from "contentful";
import { IExerciseFields } from "../model/contentful";
import { IExercise } from "../model/exercise";

// ? Better name maybe
export const mapToExerciseType = (exercise: Entry<IExerciseFields>): IExercise => {
  return {
    name: exercise.fields.name,
    slug: exercise.fields.slug,
    tags: exercise.fields.tags,
    youtubeLink: exercise.fields.youtubeLink,
    imageUrl: `https:${exercise.fields.image.fields.file.url}`
  }
}