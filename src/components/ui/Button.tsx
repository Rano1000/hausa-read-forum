import React from 'react';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    'btn',
                    {
                        'btn-primary': variant === 'primary',
                        'btn-secondary': variant === 'secondary',
                        'border border-current bg-transparent hover:bg-black/5 dark:hover:bg-white/10': variant === 'outline',
                        'bg-transparent hover:bg-black/5 text-inherit shadow-none dark:hover:bg-white/10': variant === 'ghost',
                        'text-sm px-3 py-1.5': size === 'sm',
                        'text-base px-6 py-3': size === 'md',
                        'text-lg px-8 py-4': size === 'lg',
                        'opacity-70 cursor-not-allowed': isLoading || props.disabled,
                    },
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
