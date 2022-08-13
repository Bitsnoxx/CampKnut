import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import { ICalendarEventFields } from 'model/contentful';

export default function CalendarPreview({ title, vod, date }: ICalendarEventFields) {
  const [showIframe, setShowIframe] = useState(false);

  function getVideoId(vod: string) {
    return vod.substring(32, 43);
  }

  return (
    <div className="bg-knut h-full rounded-lg bg-knut-light-bg-info transition duration-300 hover:bg-knut-light-bg dark:bg-knut-dark-bg-info hover:dark:bg-knut-dark-bg  ">
      {showIframe && vod ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${getVideoId(vod)}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setShowIframe(true)}>
          <Image
            src="/campknut2.webp"
            alt="Camp Knut"
            height={315}
            width={560}
            priority={true}
            decoding="async"
            className="aspect-auto"
          />
        </button>
      )}
      <p className="text-l pt-2 pl-4 text-knut-light-header dark:text-knut-dark-header">{title}</p>
      {vod && (
        <Link href={vod}>
          <p className="text-l pt-2 pl-4 text-knut-light-header dark:text-knut-dark-header">
            <a>VOD link</a>
          </p>
        </Link>
      )}

      <p className="text-l pt-2 pl-4 pb-4 text-knut-light-header dark:text-knut-dark-header ">
        {date}
      </p>
    </div>
  );
}
