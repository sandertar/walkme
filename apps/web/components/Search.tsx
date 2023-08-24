'use client';

import { Input } from 'ui';

export function Search(): JSX.Element {
  return (
    <Input
      uiSize={Input.size.LARGE}
      variant={Input.variant.TRANSPARENT_LIGHT}
      placeholder="Search destinations"
      rounded
    />
  );
}
