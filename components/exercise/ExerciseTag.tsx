import clsx from 'clsx';

type ExerciseTagProps = {
  children: string;
  className?: string;
};

export default function ExerciseTag({ children, className }: ExerciseTagProps) {
  return (
    <span
      className={clsx(
        className,
        'block rounded-xl bg-sky-200 p-1 px-3 text-knut-light-text dark:bg-knut-dark-tag dark:text-knut-dark-text',
      )}
    >
      {children}
    </span>
  );
}
