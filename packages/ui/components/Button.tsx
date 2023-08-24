'use client';

enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  SUCCESS = 'success',
}

enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

const SIZE_MAPS: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: 'px-5 rounded-lg h-10 text-xs',
  [ButtonSize.MEDIUM]: 'px-10 rounded-2xl h-14 text-md uppercase',
};

const VARIANT_MAPS: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]: 'bg-orange-600 text-white hover:bg-orange-500 focus:ring-red-500',
  [ButtonVariant.SECONDARY]: 'bg-white box-border ui-text-primary border border-orange-600 focus:ring-red-500',
  [ButtonVariant.ERROR]: 'bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-400',
  [ButtonVariant.SUCCESS]: 'bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-400',
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: `${ButtonVariant}`;
  uiSize?: `${ButtonSize}`;
  rounded?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: Props) => {
  const {
    children,
    variant = ButtonVariant.SECONDARY,
    uiSize = ButtonSize.MEDIUM,
    rounded = false,
    onClick = () => {},
    ...attributes
  } = props;

  const buttonLayoutClasses = 'font-semibold shadow-sm focus:outline-none focus:ring-1 focus:ring-opacity-75';

  const roundedClasses = rounded ? '!rounded-full' : '';

  const finalButtonClasses = `${buttonLayoutClasses} ${VARIANT_MAPS[variant]} ${SIZE_MAPS[uiSize]} ${roundedClasses}`;

  return (
    <button onClick={onClick} className={finalButtonClasses} {...attributes}>
      {children}
    </button>
  );
};

Button.variant = ButtonVariant;
Button.size = ButtonSize;
