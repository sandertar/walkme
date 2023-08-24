import { Trail } from 'types';

interface Props {
  params: {
    slug: string;
    trail: Trail;
  };
}

export default async function TrailPage({ params: { slug } }: Props): Promise<JSX.Element> {
  const trail: Trail = await fetch(`http://localhost:8080/api/v1/tours/${slug}`).then((res) => res.json());
  return (
    <div>
      <h1>{trail.name}</h1>
      {slug}
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const trails = await fetch('http://localhost:8080/api/v1/tours').then((res) => res.json());
  return trails.map((trail) => ({ slug: trail.slug }));
}
