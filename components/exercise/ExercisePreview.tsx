import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IExerciseFields } from "../../model/contentful";
import { IUIExercise } from "../../model/ui";
import ExerciseTag from "./ExerciseTag";

export default function ExercisePreview({
  image,
  name,
  slug,
  tags,
}: IUIExercise) {
  return (
    <Link href={`/exercises/${slug}`}>
      <a>
        <div className="h-full rounded-sm px-2 py-4 bg-knut bg-knut-light-bg-info dark:bg-knut-dark-bg-info hover:bg-knut-light-bg hover:dark:bg-knut-dark-bg transition duration-300">
          <div className="inline-block relative w-full aspect-video">
            <Image
              priority
              objectFit="cover"
              src={image}
              layout="fill"
              alt={name}
            />
          </div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="py-2 mt-auto">
            {tags?.map((t) => (
              <ExerciseTag key={t} className="mx-1 inline-block">
                {t}
              </ExerciseTag>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
