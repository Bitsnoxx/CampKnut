import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IExerciseFields } from "../../model/contentful";
import ExerciseTag from "./ExerciseTag";

export default function ExercisePreview({
  image,
  name,
  slug,
  tags,
}: IExerciseFields) {
  return (
    <Link href={`/exercises/${slug}`}>
      <a>
        <div className="h-full rounded-sm px-2 py-4 bg-knut hover:bg-knut-light-bg-info hover:dark:bg-knut-dark-bg-info bg-knut-light-bg dark:bg-knut-dark-bg transition duration-300">
          <div className="inline-block relative w-full aspect-video">
            <Image
              priority
              objectFit="cover"
              src={`https:${image.fields.file.url}`}
              layout="fill"
              alt={name}
            />
          </div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="my-2">
            {tags?.map((t) => (
              <ExerciseTag key={t} className="mx-1">
                {t}
              </ExerciseTag>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
