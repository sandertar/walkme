enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  SUCCESS = 'success',
}

enum ButtonSize {
  LARGE = 'large',
  SMALL = 'small',
}

const SIZE_MAPS: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: 'px-2.5 text-xs',
  [ButtonSize.LARGE]: 'px-3 text-sm',
};

const VARIANT_MAPS: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-700',
  [ButtonVariant.SECONDARY]: 'bg-secondary-900 text-white hover:bg-secondary-600 focus:ring-secondary-700',
  [ButtonVariant.ERROR]: 'bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-400',
  [ButtonVariant.SUCCESS]: 'bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-400',
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: Props) => {
  const { children, variant, size, onClick, ...attributes } = props;

  const buttonLayoutClasses =
    'py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75';

  const finalButtonClasses = `${buttonLayoutClasses} ${VARIANT_MAPS[variant]} ${SIZE_MAPS[size]}`;

  return (
    <button onClick={onClick} className={finalButtonClasses} {...attributes}>
      {children}
    </button>
  );
};

Button.variant = ButtonVariant;
Button.size = ButtonSize;
