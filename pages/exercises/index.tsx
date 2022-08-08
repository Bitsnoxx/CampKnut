import clsx from "clsx";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import ExercisePreview from "../../components/exercise/ExercisePreview";
import PageLayout from "../../components/layout/PageLayout";
import { getExercises } from "../../utils/contentful";
import slugify from "../../utils/slugify";
import ScrollContainer from "react-indiana-drag-scroll";
import { IUIExercise } from "../../model/ui";
import { placeHolderImage } from "../../content/links";
import { CgClose } from "react-icons/cg";

export default function ExerciseListPage({
  exercises,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const tags = [
    ...new Set(
      exercises.flatMap((e) => e.tags).filter((x) => typeof x === "string" && x)
    ),
  ] as string[];

  const [searchTags, setSearchTags] = useState(
    tags.map((e) => ({ tag: e, active: false }))
  );

  useEffect(() => {
    const e = exercises.filter(filterLogic);
    setFilteredExercises(e);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTags, searchTerm]);

  const filterLogic = (e: IUIExercise) => {
    const term = slugify(searchTerm.toLowerCase());
    const name = slugify(e.name.toLowerCase());
    const tags = e.tags;

    const activeTags = searchTags.filter((x) => x.active);
    const tagIntersection = activeTags.filter((x) => tags.includes(x.tag));

    return name.includes(term) && tagIntersection.length === activeTags.length;
  };

  const clearFilters = () => {
    setSearchTags(searchTags.map((x) => ({ ...x, active: false })));
    setSearchTerm("");
  };

  return (
    <PageLayout widthClassName="max-w-none">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold">Exercises</h1>
        <div className="pb-6">
          <div className="flex flex-row gap-4 items-center w-full max-w-2xl">
            <div className="relative w-full">
              <input
                className="placeholder-slate-400 dark:placeholder:-slate-500 px-4 py-[6px] w-full text-knut-light-text dark:text-knut-dark-text rounded-xl border-black border-2 mt-5"
                type={"text"}
                value={searchTerm}
                placeholder={"zinc exercise"}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button
                className={clsx(
                  "absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2",
                  "p-1 bg-gray-200 text-black dark:text-slate-600 dark:bg-knut-dark-text rounded-xl select-none mt-2.5"
                )}
                onClick={clearFilters}
                aria-label="Clear filters"
                title="Clear filters"
              >
                <CgClose />
              </button>
            </div>
          </div>
          <ScrollContainer
            hideScrollbars
            nativeMobileScroll
            className="flex flex-row gap-4 cursor-grab md:order-2 pt-5"
            horizontal
          >
            {searchTags
              .sort((a, b) => a.tag.localeCompare(b.tag))
              .map((e) => (
                <div
                  key={e.tag}
                  className={clsx(
                    e.active
                      ? "bg-sky-200 dark:bg-knut-dark-tag"
                      : "bg-gray-200 dark:bg-slate-600",
                    "select-none dark:text-knut-dark-text text-knut-light-text rounded-xl py-1 px-3 cursor-pointer"
                  )}
                  onClick={() => {
                    setSearchTags([
                      ...searchTags.filter((x) => x.tag !== e.tag),
                      { ...e, active: !e.active },
                    ]);
                  }}
                >
                  {e.tag}
                </div>
              ))}
          </ScrollContainer>
        </div>
        <div
          className="grid auto-rows-max gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          }}
        >
          {filteredExercises
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter(filterLogic)
            .map((exercise) => (
              <ExercisePreview key={exercise.slug} {...exercise} />
            ))}
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps<{
  exercises: IUIExercise[];
}> = async () => {
  const exercises = await getExercises();
  return {
    props: {
      exercises: exercises.items.map(({ fields }) => {
        return {
          ...fields,
          image: fields.image.fields.file
            ? `https:${fields.image.fields.file.url}`
            : placeHolderImage,
          tags: fields.tags ?? [],
        };
      }),
    },
  };
};
