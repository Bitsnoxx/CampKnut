import { introduction } from "./../../content/text";

export default function Introduction() {
  return (
    <section className="mb-10 mt-5">
      <h1 className="text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
        What is {introduction.title}?
      </h1>
      <section>
        <h3>{introduction.whatIs}</h3>
      </section>
      <div className="my-10">
        <h2 className="mt-8 text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
          Goal 🏆
        </h2>
        <h1>{introduction.goal}</h1>
      </div>
      <div className="my-10">
        <h2 className="mt-8 text-2xl font-bold light:text-knut-light-header dark:text-knut-dark-header">
          Who is Knut?
        </h2>
        <h1>{introduction.whoIsKnut}</h1>
      </div>
    </section>
  );
}
