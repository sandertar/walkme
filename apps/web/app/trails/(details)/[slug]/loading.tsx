import { Skeleton } from 'ui';

export default function Loading(): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 pb-4">
      <div>
        <Skeleton variant="rectangular" className="h-[300px]" />
        <Skeleton variant="text" className="h-6" />
        <Skeleton variant="text" className="mb-6" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    </div>
  );
}
