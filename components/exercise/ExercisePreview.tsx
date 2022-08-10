import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IUIExercise } from 'model/ui';
import ExerciseTag from './ExerciseTag';

export default function ExercisePreview({ image, name, slug, tags }: IUIExercise) {
  return (
    <Link href={`/exercises/${slug}`}>
      <a>
        <div className="h-full rounded-xl bg-knut-light-bg-info transition duration-300 hover:bg-knut-light-bg dark:bg-knut-dark-bg-info hover:dark:bg-knut-dark-bg ">
          <div className="relative inline-block aspect-video ">
            <Image
              objectFit="cover"
              src={image}
              /* layout="fill" */
              width={320}
              height={250}
              alt={name}
              className=" rounded-t-md"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl pl-2 font-bold">{name}</h3>
          <div className="mt-auto py-2 ">
            {tags?.map((t) => (
              <ExerciseTag key={t} className="mx-1 ml-2 inline-block">
                {t}
              </ExerciseTag>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
