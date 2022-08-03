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
        className="dark:text-gray-300 text-gray-700 underline"
        {...props}
      />
    );
  },
  Important: (props: any) => {
    const text = props.children.props.children;
    return <div className="p-4 my-4 bg-gray-200 dark:bg-gray-600">{text}</div>;
  },
  Info: (props: any) => null,
  ["*"]: (props: any) => null,
};
