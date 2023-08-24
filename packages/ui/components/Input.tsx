'use client';

enum InputVariant {
  DEFAULT = 'default',
  ERROR = 'error',
  TRANSPARENT_LIGHT = 'transparent',
}

enum InputSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const SIZE_MAPS: Record<InputSize, string> = {
  [InputSize.SMALL]: 'px-5 rounded-lg h-10 text-xs',
  [InputSize.MEDIUM]: 'px-5 rounded-2xl h-14 text-md',
  [InputSize.LARGE]: 'px-10 rounded-2xl h-16 text-md',
};

const VARIANT_MAPS: Record<InputVariant, string> = {
  [InputVariant.DEFAULT]: 'border ui-border-color',
  [InputVariant.ERROR]: 'border text-red-800 border-red-500 focus:ring-red-400',
  [InputVariant.TRANSPARENT_LIGHT]: 'bg-white/50 placeholder:text-white/70 text-white',
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  variant?: `${InputVariant}`;
  uiSize?: `${InputSize}`;
  rounded?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props): JSX.Element => {
  const {
    value = '',
    variant = InputVariant.DEFAULT,
    uiSize = InputSize.MEDIUM,
    rounded = false,
    onChange = () => {},
    ...attributes
  } = props;

  const InputLayoutClasses = 'w-full shadow-sm rounded-2xl focus:outline-none focus:ring-1 focus:ring-opacity-75';

  const roundedClasses = rounded ? '!rounded-full' : '';

  const finalInputClasses = `${InputLayoutClasses} ${VARIANT_MAPS[variant]} ${SIZE_MAPS[uiSize]} ${roundedClasses}`;

  return <input value={value} onChange={onChange} className={finalInputClasses} {...attributes} />;
};

Input.variant = InputVariant;
Input.size = InputSize;
