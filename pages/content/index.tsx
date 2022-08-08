import Image from "next/image";

import PageLayout from "../../components/layout/PageLayout";
import { Playlist, PlaylistItem } from "../../model/youtube";

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_YOUTUBE_PLAYLIST}?part=snippet&playlistId=${process.env.NEXT_YOUTUBE_PLAYLIST_ID}&maxResults=50&key=${process.env.NEXT_YOUTUBE_API_KEY}`
  );

  const data: Playlist = await res.json();

  console.log(data);
  return {
    props: {
      playlist: data.items,
    },
    revalidate: 600,
  };
}

export default function ContentPage({
  playlist,
}: {
  playlist: PlaylistItem[];
}) {
  console.log(playlist);
  return (
    <PageLayout widthClassName="container flex-1 mx-auto p-4 max-w-none">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold pb-5">Content</h1>
        <div
          className="grid auto-rows-max gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          }}
        >
          {playlist.reverse().map((item) => {
            const { id, snippet } = item;
            const { title, thumbnails } = snippet;
            const { medium } = thumbnails;

            return (
              <a
                key={id}
                href={`https://www.youtube.com/watch?v=KWLDgKV0pEs${snippet.resourceId.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  key={id}
                  className="h-full bg-knut rounded-lg bg-knut-light-bg-info dark:bg-knut-dark-bg-info hover:bg-knut-light-bg hover:dark:bg-knut-dark-bg transition duration-300 "
                >
                  <Image
                    src={medium.url}
                    height={300}
                    width={500}
                    alt="Pag"
                    className="inline-block relative w-full aspect-video rounded-xl cursor-pointer"
                    priority
                  />
                  <span className="ml-2 text-l mt-4 text-knut-light-header dark:text-knut-dark-header">
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
