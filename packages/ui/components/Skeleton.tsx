'use client';

enum SkeletonVariant {
  TEXT = 'text',
  RECTANGULAR = 'rectangular',
  CIRCULAR = 'circular',
}

const VARIANT_MAPS: Record<SkeletonVariant, string> = {
  [SkeletonVariant.TEXT]: 'h-3 w-full rounded-lg',
  [SkeletonVariant.RECTANGULAR]: 'w-full rounded-lg',
  [SkeletonVariant.CIRCULAR]: 'rounded-full',
};

interface Props {
  variant: `${SkeletonVariant}`;
  className?: string;
}

export const Skeleton = ({ className, variant }: Props) => {
  const skeletonLayoutClasses = 'animate-pulse bg-gray-200 mb-4';

  const finalSkeletonClasses = `${className} ${skeletonLayoutClasses} ${VARIANT_MAPS[variant]}`;

  return <div className={finalSkeletonClasses} />;
};

Skeleton.variant = SkeletonVariant;
