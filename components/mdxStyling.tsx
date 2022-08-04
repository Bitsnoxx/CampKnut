import Important from "./ui/Important";

export const components = {
  h1: (props: any) => {
    return <h1 className="text-3xl font-bold mb-6" {...props} />;
  },
  h2: (props: any) => {
    return <h2 className="text-2xl font-bold mb-4" {...props} />;
  },
  h3: (props: any) => {
    return <h2 className="text-xl font-bold mb-2" {...props} />;
  },
  p: (props: any) => {
    return <p className="text-base my-4" {...props} />;
  },
  ul: (props: any) => {
    return <ul className="list-disc list-inside" {...props} />;
  },
  a: (props: any) => {
    return (
      <a
        target={"_blank"}
        rel="noreferrer"
        className="dark:text-knut-dark-post-link text-knut-light-post-link underline"
        {...props}
      />
    );
  },
  Important: Important,
  Info: (props: any) => null,
};
