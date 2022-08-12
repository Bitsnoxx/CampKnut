import PageLayout from 'components/layout/PageLayout';
import YoutubePreview from 'components/youtube/youtubePreview';
import { baseUrl } from 'content/links';
import { seo } from 'content/text';
import { OpenGraph } from 'model/opengraph';
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
  const og: OpenGraph = {
    site_name: seo.title,
    title: 'Content - ' + seo.title,
    description: 'Collection of content from Youtube',
    type: 'video.other',
    url: baseUrl + '/content',
  };
  return (
    <PageLayout widthClassName="container flex-1 mx-auto p-4 max-w-none" openGraph={og}>
      <div className="mx-auto w-11/12">
        <h1 className="text-3xl pb-5 font-bold">Content</h1>

        <div
          className="grid auto-rows-max gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
          }}
        >
          {playlist.reverse().map((item) => (
            <YoutubePreview key={item.id} item={item} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
