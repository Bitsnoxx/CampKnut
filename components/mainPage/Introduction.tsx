import { introduction } from "./../../content/text";

export default function Introduction() {
  return (
    <>
      <h1 className="text-3xl font-bold">Camp Knut</h1>
      <div className="mb-10 mt-5">
        <h2 className="text-center text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
          What is Camp Knut?
        </h2>
        <p>{introduction.whatIs}</p>
        <section className="my-10">
          <h2 className="mt-8 text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
            Goal 🏆
          </h2>
          <p>{introduction.goal}</p>
        </section>
        <section className="my-10">
          <h2 className="mt-8 text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
            Who is Knut?
          </h2>
          <p>{introduction.whoIsKnut}</p>
        </section>
      </div>
    </>
  );
}
