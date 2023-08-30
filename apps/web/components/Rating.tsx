import { BsStarFill } from 'react-icons/bs';

interface Props {
  rating: number;
}

export function Rating({ rating }: Props): JSX.Element {
  return (
    <div className="inline-flex items-center space-x-2">
      <BsStarFill /> <span>{rating}</span>
    </div>
  );
}
