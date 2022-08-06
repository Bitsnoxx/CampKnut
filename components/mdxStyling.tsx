import Important from "./ui/Important";

export const components = {
  h1: (props: any) => {
    return <h1 className="text-1xl font-bold mb-6" {...props} />;
  },
  h2: (props: any) => {
    return <h2 className="text-2xl font-bold mb-4" {...props} />;
  },
  h3: (props: any) => {
    return <h3 className="text-xl font-bold mb-2" {...props} />;
  },
  h4: (props: any) => {
    return <h4 className="text-xl font-bold mb-2" {...props} />;
  },
  h5: (props: any) => {
    return <h5 className="text-xl font-bold mb-2" {...props} />;
  },
  h6: (props: any) => {
    return <h6 className="text-xl font-bold mb-2" {...props} />;
  },

  p: (props: any) => {
    return <p className="list-disc list-inside" {...props} />;
  },
  li: (props: any) => {
    return (
      <li className="list-disc list-inside text-red-600 not-prose" {...props} />
    );
  },
  ul: (props: any) => {
    return <ul className="list-disc list-inside text-red-600" {...props} />;
  },
  a: (props: any) => {
    return (
      <a
        target={"_blank"}
        rel="noreferrer"
        className="light:text-knut-light-header dark:text-knut-dark-header hover:font-black"
        {...props}
      />
    );
  },
  Important: Important,
  Info: (props: any) => null,
};
