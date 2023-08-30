import { Skeleton } from 'ui';

export default function Loading(): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 pb-4">
      <div>
        <Skeleton variant="rectangular" className="aspect-square" />
        <Skeleton variant="rectangular" className="aspect-square" />
        <Skeleton variant="rectangular" className="aspect-square" />
      </div>
    </div>
  );
}
