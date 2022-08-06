import clsx from "clsx";

type ExerciseTagProps = {
  children: string;
  className?: string;
};

export default function ExerciseTag({ children, className }: ExerciseTagProps) {
  return (
    <span
      className={clsx(
        className,
        "dark:text-knut-dark-text light:text-knut-light-text dark:bg-knut-dark-tag bg-sky-200 p-1 rounded-xl px-3"
      )}
    >
      {children}
    </span>
  );
}
