import Important from './ui/Important';

export const components = {
  h1: (props: any) => {
    return <h1 className="text-3xl mb-6 font-bold" {...props} />;
  },
  h2: (props: any) => {
    return <h2 className="text-2xl mb-4 font-bold" {...props} />;
  },
  h3: (props: any) => {
    return <h3 className="text-xl mb-2 font-bold" {...props} />;
  },
  h4: (props: any) => {
    return <h4 className="text-xl mb-2 font-bold" {...props} />;
  },
  h5: (props: any) => {
    return <h5 className="text-xl mb-2 font-bold" {...props} />;
  },
  h6: (props: any) => {
    return <h6 className="text-xl mb-2 font-bold" {...props} />;
  },

  p: (props: any) => {
    return <p className="list-inside list-disc" {...props} />;
  },
  li: (props: any) => {
    return <li className="not-prose list-inside list-disc " {...props} />;
  },
  ul: (props: any) => {
    return <ul className="list-inside list-disc" {...props} />;
  },
  a: (props: any) => {
    return (
      <a target={'_blank'} rel="noreferrer" className="  text-xl hover:underline " {...props} />
    );
  },
  Important: (props: any) => <Important>{props.children}</Important>,
  Info: (props: any) => null,
};
