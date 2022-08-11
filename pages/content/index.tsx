import PageLayout from 'components/layout/PageLayout';
import { Playlist, PlaylistItem } from 'model/youtube';
import { OpenGraph } from "model/opengraph";
import { SEO } from "content/text";
import { baseUrl } from "content/links";

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_YOUTUBE_PLAYLIST}?part=snippet&playlistId=${process.env.NEXT_YOUTUBE_PLAYLIST_ID}&maxResults=50&key=${process.env.NEXT_YOUTUBE_API_KEY}`,
  );

  const data: Playlist = await res.json();

  return {
    props: {
      playlist: data.items,
    },
    revalidate: 10,
  };
}

export default function ContentPage({ playlist }: { playlist: PlaylistItem[] }) {
  let og:OpenGraph = {
    site_name: seo.title,
    title: "Content - " + seo.title,
    description: "Fun content and worth watching clips and videos from Camp Knut.",
    type: "video.other",
    url: baseUrl + "/content",
  }

  return (
    <PageLayout widthClassName="container flex-1 mx-auto p-4 max-w-none" openGraph={og}>
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
                src={`https://www.youtube-nocookie.com/embed/${snippet.resourceId.videoId}`}
                allowFullScreen
                width="400"
                height="200"
              ></iframe>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
