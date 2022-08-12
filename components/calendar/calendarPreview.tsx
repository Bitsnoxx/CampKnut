import { ICalendarEventFields } from 'model/contentful';
import Image from 'next/image';
import Link from 'next/link';

export default function CalendarPreview({ title, date, slug }: ICalendarEventFields) {
  return (
    <div className="bg-knut h-full rounded-lg bg-knut-light-bg-info transition duration-300 hover:bg-knut-light-bg dark:bg-knut-dark-bg-info hover:dark:bg-knut-dark-bg ">
      <Link href={`/calendar/${slug}`}>
        <Image
          src="/campknut2.webp"
          alt="Camp Knut"
          width={350}
          height={250}
          priority={true}
          decoding="async"
          className="aspect-auto"
        />
      </Link>
      <p className="text-l pt-2 pl-2 text-knut-light-header dark:text-knut-dark-header">{title}</p>
      <p className="text-l pl-2 pb-2 text-knut-light-header dark:text-knut-dark-header">{date}</p>
    </div>
  );
}
