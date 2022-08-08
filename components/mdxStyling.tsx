import Important from "./ui/Important";

export const components = {
  h1: (props: any) => {
    return <h1 className="mb-6 text-3xl font-bold" {...props} />;
  },
  h2: (props: any) => {
    return <h2 className="mb-4 text-2xl font-bold" {...props} />;
  },
  h3: (props: any) => {
    return <h3 className="mb-2 text-xl font-bold" {...props} />;
  },
  h4: (props: any) => {
    return <h4 className="mb-2 text-xl font-bold" {...props} />;
  },
  h5: (props: any) => {
    return <h5 className="mb-2 text-xl font-bold" {...props} />;
  },
  h6: (props: any) => {
    return <h6 className="mb-2 text-xl font-bold" {...props} />;
  },

  p: (props: any) => {
    return <p className="list-inside list-disc" {...props} />;
  },
  li: (props: any) => {
    return (
      <li className="not-prose list-inside list-disc text-red-600" {...props} />
    );
  },
  ul: (props: any) => {
    return <ul className="list-inside list-disc text-red-600" {...props} />;
  },
  a: (props: any) => {
    return (
      <a
        target={"_blank"}
        rel="noreferrer"
        className="text-knut-light-header hover:font-black dark:text-knut-dark-header"
        {...props}
      />
    );
  },
  Important: (props: any) => <Important>{props.children}</Important>,
  Info: (props: any) => null,
};
