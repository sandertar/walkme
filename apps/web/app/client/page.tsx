'use client';

import { useState } from 'react';
import { Button } from 'ui';

export default function Page(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{process.env.NEXT_PUBLIC_API_PORT}</p>
      <p className="text-brandblue">{count}</p>
      <Button
        variant={Button.variant.PRIMARY}
        size={Button.size.SMALL}
        onClick={(): void => {
          setCount((v) => v + 1);
        }}
      >
        test
      </Button>
    </>
  );
}
