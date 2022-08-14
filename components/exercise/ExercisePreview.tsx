import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import { IUIExercise } from 'model/ui';

import ExerciseTag from './ExerciseTag';

export default function ExercisePreview({ image, name, slug, tags }: IUIExercise) {
  return (
    <Link href={`/exercises/${slug}`}>
      <a>
        <div className="flex h-full flex-col rounded-xl bg-knut-light-bg-info transition duration-300 hover:bg-knut-light-bg dark:bg-knut-dark-bg-info hover:dark:bg-knut-dark-bg ">
          <div className="relative inline-block aspect-video ">
            <Image
              objectFit="cover"
              src={image}
              width={320}
              height={250}
              alt={name}
              className=" rounded-t-md"
              loading="lazy"
            />
          </div>
          <h3 className="px-3 pt-3 font-bold">{name}</h3>
          <div className="mt-auto py-3">
            <div className="px-1.5">
              {tags?.map((t) => (
                <ExerciseTag key={t} className="mx-1.5 mt-1.5 inline-block">
                  {t}
                </ExerciseTag>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
