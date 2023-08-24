interface Props {
  title?: React.ReactNode;
  children: React.ReactNode;
  titleCentered?: boolean;
}

export default function Section({ title, children, titleCentered }: Props): JSX.Element {
  return (
    <section className="py-14">
      <div className="ui-container">
        {title && (
          <h2 className={`text-4xl md:text-5xl font-bold mb-10 font-accent ${titleCentered ? 'text-center' : ''}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
