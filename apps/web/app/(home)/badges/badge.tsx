interface Props {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function Badge({ icon, title, content }: Props): JSX.Element {
  return (
    <div className="text-center px-10 py-5">
      <div className="flex justify-center text-5xl mb-5 ui-text-primary">{icon}</div>
      <p className="font-bold font-accent mb-3 text-lg">{title}</p>
      <p>{content}</p>
    </div>
  );
}
