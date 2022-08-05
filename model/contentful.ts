import type { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ICalendarEventFields {
  title: string;
  vod: string;
  date: string;
  slug: string;
}

export interface ICalendarEvent extends Entry<ICalendarEventFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "calendarEvent";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IExerciseFields {
  name: string;
  slug: string;
  youtubeLink: string;
  tags: any;
  image: Asset;
}

export interface IExercise extends Entry<IExerciseFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "exercise";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IWorkoutPostFields {
  title: string;
  slug: string;
  text: Document;
}

export interface IWorkoutPost extends Entry<IWorkoutPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "workoutPost";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IContentfulQuery {
  content_type: CONTENT_TYPE;
  skip?: number;
  limit?: number;
  order?: string;
  [key: string]: any;
}

export type CONTENT_TYPE = "workoutPost" | "exercise" | "calendarEvent";
export type LOCALE_CODE = "en-US";
export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
