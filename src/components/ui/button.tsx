import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import { cn } from '../../lib/utils';

type TVariant = 'outline' | 'primary' | undefined;
type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ children, variant, className, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case 'outline':
          return 'inline-flex items-center justify-center rounded-md border border-primary text-center font-medium text-primary hover:bg-opacity-90 ';
        case 'primary':
          return 'inline-flex items-center justify-center rounded-md bg-primary text-center font-medium text-white hover:bg-opacity-90  ';
        default:
          return 'border border-primary text-primary dark:border-gray-700 dark:text-gray-300';
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-3 rounded-md md:rounded-lg text-zinc-700 text-sm md:text-base md:font-medium transition-all duration-200 hover:scale-[0.98] dark:bg-gray-800 dark:text-gray-300',
          getVariant(variant),
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
