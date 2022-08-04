export default function Important(props: any) {
  const text = props.children.props.children;
  return (
    <div className="p-4 my-4 bg-knut-light-bg-info dark:bg-knut-dark-bg-info">
      {text}
    </div>
  );
}
