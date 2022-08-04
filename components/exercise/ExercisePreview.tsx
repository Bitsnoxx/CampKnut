import Image from "next/image";
import Link from "next/link";
import { IExercise } from "../../model/exercise";
import ExerciseTag from "./ExerciseTag";

export default function ExercisePreview({
  imageUrl,
  name,
  slug,
  tags,
}: IExercise) {
  return (
    <Link href={`/exercises/${slug}`}>
      <a>
        <div className="h-full rounded-sm px-2 py-4 bg-knut bg-knut-light-bg-info dark:bg-knut-dark-bg-info hover:bg-knut-light-bg hover:dark:bg-knut-dark-bg transition duration-300">
          <div className="inline-block relative w-full aspect-video">
            <Image objectFit="cover" src={imageUrl} layout="fill" alt={name} />
          </div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="my-2">
            {tags.map((t) => (
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
