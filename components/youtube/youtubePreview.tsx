import Image from 'next/image';

import { FC, useState } from 'react';

import { PlaylistItem } from 'model/youtube';

type YoutubeProps = {
  item: PlaylistItem;
};

const YoutubePreview: FC<YoutubeProps> = ({ item }) => {
  const [showIframe, setShowIframe] = useState(false);

  const {
    snippet: {
      title,
      thumbnails: { medium },
      resourceId: { videoId },
    },
  } = item;

  return (
    <div className="bg-knut h-full rounded-lg bg-knut-light-bg-info transition duration-300 hover:bg-knut-light-bg dark:bg-knut-dark-bg-info hover:dark:bg-knut-dark-bg ">
      {showIframe ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setShowIframe(true)}>
          <Image
            src={medium.url}
            height={315}
            width={560}
            alt={title}
            className="aspect-video w-full"
          />
        </button>
      )}
      <p className="text-l p-4 text-knut-light-header dark:text-knut-dark-header">{title}</p>
    </div>
  );
};

export default YoutubePreview;
