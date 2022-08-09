import { introduction } from 'content/text';

export default function Introduction() {
  return (
    <>
      <div className="my-5">
        <IntroductionSection>
          <h2 className="text-2xl font-bold text-knut-light-header dark:text-knut-dark-header">
            What is Camp Knut?
          </h2>
          <p>{introduction.whatIs}</p>
        </IntroductionSection>

        <IntroductionSection>
          <h2 className="text-2xl mt-8 font-bold text-knut-light-header dark:text-knut-dark-header">
            Goal 🏆
          </h2>
          <p>{introduction.goal}</p>
        </IntroductionSection>

        <IntroductionSection>
          <h2 className="text-2xl mt-8 font-bold text-knut-light-header dark:text-knut-dark-header">
            Who is Knut?
          </h2>
          <p>{introduction.whoIsKnut}</p>
        </IntroductionSection>
      </div>
    </>
  );
}

const IntroductionSection = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <section className="my-10">{children}</section>;
};
