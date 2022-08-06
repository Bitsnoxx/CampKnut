import { createClient } from "contentful";
import type {
  ICalendarEventFields,
  IContentfulQuery,
  IExerciseFields,
  IWorkoutPostFields,
} from "../model/contentful";

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ?? "ErrorNoAccesToken",
});

export const getCalendarEvents = async () => {
  const events = await client.getEntries<ICalendarEventFields>({
    content_type: "calendarEvent",
  } as IContentfulQuery);

  events.items.sort((a, b) => {
    const aDate = new Date(a.fields.date);
    const bDate = new Date(b.fields.date);
    return aDate.getTime() - bDate.getTime();
  });
  return events;
};

export const getWorkoutPosts = async () => {
  const posts = await client.getEntries<IWorkoutPostFields>({
    content_type: "workoutPost",
    order: "sys.createdAt",
  } as IContentfulQuery);

  return posts;
};

export const getExercises = async () => {
  const exercises = await client.getEntries<IExerciseFields>({
    content_type: "exercise",
    order: "sys.createdAt",
  } as IContentfulQuery);

  return exercises;
};

export const getOneExercise = async (slug: SlugType) => {
  const exercise = await client.getEntries<IExerciseFields>({
    content_type: "exercise",
    "fields.slug": slug,
  } as IContentfulQuery);

  return exercise.items[0];
};

export const getOneWorkoutPost = async (slug: SlugType) => {
  const post = await client.getEntries<IWorkoutPostFields>({
    content_type: "workoutPost",
    "fields.slug": slug,
  } as IContentfulQuery);
  return post.items[0];
};

export const getOneCalendarEvent = async (slug: SlugType) => {
  const event = await client.getEntries<ICalendarEventFields>({
    content_type: "calendarEvent",
    "fields.slug": slug,
  } as IContentfulQuery);
  return event.items[0];
};

type SlugType = string | string[] | undefined;
