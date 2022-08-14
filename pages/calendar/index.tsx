import { GetStaticProps, InferGetStaticPropsType } from 'next';

import CalendarPreview from 'components/calendar/calendarPreview';
import PageLayout from 'components/layout/PageLayout';
import { baseUrl } from 'content/links';
import { introduction } from 'content/text';
import { ICalendarEventFields } from 'model/contentful';
import { OpenGraph } from 'model/opengraph';
import { getCalendarEvents } from 'utils/contentful';

const og: OpenGraph = {
  site_name: introduction.title,
  title: 'Calendar ' + introduction.title,
  locale: 'en_GB',
  description: 'Calendar for Camp Knut',
  type: 'website',
  url: baseUrl,
};

export default function CalendarListEvents({
  calendarEntries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout widthClassName="container flex-1 mx-auto p-4 max-w-none" openGraph={og}>
      <div className="mx-auto w-11/12">
        <h1 className="text-3xl pb-5 font-bold">Calendar</h1>
        <div className="pb-6">
          <div className="flex w-full max-w-2xl flex-row items-center gap-4">
            <div className="relative w-full"></div>
          </div>
        </div>
        <div
          className="grid auto-rows-max gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
          }}
        >
          {calendarEntries.map((item) => (
            <CalendarPreview key={item.title} {...item} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps<{
  calendarEntries: ICalendarEventFields[];
}> = async () => {
  const calendarEntries = await getCalendarEvents();
  return {
    props: {
      calendarEntries: calendarEntries.items.map(({ fields }) => {
        return {
          ...fields,
          date: new Date(fields.date).toDateString(),
        };
      }),
    },
  };
};
