import Image from 'next/image';

import PageLayout from 'components/layout/PageLayout';
import { Playlist, PlaylistItem } from 'model/youtube';

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_YOUTUBE_PLAYLIST}?part=snippet&playlistId=${process.env.NEXT_YOUTUBE_PLAYLIST_ID}&maxResults=50&key=${process.env.NEXT_YOUTUBE_API_KEY}`,
  );

  const data: Playlist = await res.json();

  return {
    props: {
      playlist: data.items,
    },
    revalidate: 60,
  };
}

export default function ContentPage({ playlist }: { playlist: PlaylistItem[] }) {
  return (
    <PageLayout widthClassName="container flex-1 mx-auto p-4 max-w-none">
      <div className="mx-auto w-11/12">
        <h1 className="pb-4 font-bold">Content</h1>
        <div
          className="grid auto-rows-max gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
          }}
        >
          {playlist.reverse().map((item) => {
            const { id, snippet } = item;

            return (
              <iframe
                key={id}
                href={`https://www.youtube.com/watch?v=KWLDgKV0pEs${snippet.resourceId.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  key={id}
                  className="bg-knut h-full rounded-lg bg-knut-light-bg-info transition duration-300 hover:bg-knut-light-bg dark:bg-knut-dark-bg-info hover:dark:bg-knut-dark-bg "
                >
                  <Image
                    src={medium.url}
                    height={300}
                    width={500}
                    alt="Pag"
                    className="relative inline-block aspect-video w-full cursor-pointer rounded-xl"
                    priority
                  />
                  <span className="text-l ml-2 mt-4 text-knut-light-header dark:text-knut-dark-header">
                    {title}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
