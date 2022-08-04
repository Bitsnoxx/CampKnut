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
        "p-1 bg-knut-light-text text-knut-light-bg dark:text-knut-dark-text dark:bg-knut-dark-bg"
      )}
    >
      {children}
    </span>
  );
}
