import Link from 'next/link';

export default function Page(): JSX.Element {
  return (
    <>
      <p data-testid="heading">{process.env.API_PORT}</p>
      <Link href="/client">client page</Link>
      <br />
      <Link href="/server">server page</Link>
    </>
  );
}
