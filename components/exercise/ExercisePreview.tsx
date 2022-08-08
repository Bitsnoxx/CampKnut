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
        <div className="h-full rounded-xl  bg-knut bg-knut-light-bg-info dark:bg-knut-dark-bg-info hover:bg-knut-light-bg hover:dark:bg-knut-dark-bg transition duration-300 ">
          <div className="inline-block relative w-full aspect-video ">
            <Image
              priority
              objectFit="cover"
              src={image}
              /* layout="fill" */
              width={320}
              height={250}
              alt={name}
              className=" rounded-t-md"
            />
          </div>
          <h1 className="text-xl font-bold pl-2">{name}</h1>
          <div className="py-2 mt-auto">
            {tags?.map((t) => (
              <ExerciseTag key={t} className="mx-1 inline-block ml-2">
                {t}
              </ExerciseTag>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
