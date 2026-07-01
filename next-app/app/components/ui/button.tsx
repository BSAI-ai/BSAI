import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-brand-blue text-white hover:bg-brand-blue/90',
                outline: 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10',
                ghost: 'text-slate-300 hover:bg-white/10 hover:text-white',
            },
            size: {
                default: 'px-5 py-3',
                sm: 'px-3 py-2',
                lg: 'px-6 py-3.5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
