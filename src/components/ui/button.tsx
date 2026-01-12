import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        luxury: "relative bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white font-semibold shadow-gold hover:shadow-gold-intense hover:scale-[1.02] active:scale-[0.98] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        luxuryOutline: "border-2 border-gold text-gold hover:bg-gold/10 hover:shadow-gold hover:border-gold-light transition-all duration-400",
        hero: "relative bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white font-bold text-base px-10 py-7 shadow-gold-intense hover:shadow-[0_20px_70px_-10px_hsl(42_85%_45%_/_0.5)] hover:scale-[1.03] active:scale-[0.98] uppercase tracking-[0.15em] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-600",
        heroOutline: "border-2 border-gold text-gold hover:bg-gold/10 hover:shadow-gold-intense hover:border-gold-light font-bold text-base px-10 py-7 uppercase tracking-[0.15em] transition-all duration-400",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-sm",
        sm: "h-9 px-4 rounded-sm",
        lg: "h-12 px-8 rounded-sm",
        xl: "h-14 px-10 text-base rounded-sm",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
