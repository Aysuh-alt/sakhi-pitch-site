import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 hover:scale-105 hover:shadow-[0_6px_24px_hsla(351,100%,86%,0.4)]",
        destructive: "bg-destructive text-white hover:bg-destructive/90 hover:scale-105",
        outline: "border-2 border-foreground/20 bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/5 hover:scale-105",
        secondary: "bg-secondary text-white hover:bg-secondary/80 hover:scale-105 hover:shadow-[0_6px_24px_hsla(270,35%,72%,0.4)]",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        golden: "bg-golden text-white hover:bg-golden/90 shadow-[0_4px_20px_hsla(43,74%,49%,0.35)] hover:shadow-[0_8px_32px_hsla(43,74%,49%,0.5)] hover:scale-105 font-bold",
        hero: "bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-[0_6px_24px_rgba(255,255,255,0.3)]",
      },
      size: {
        default: "h-11 px-6 py-2 min-w-[44px] min-h-[44px]",
        sm: "h-10 rounded-md px-4 min-w-[44px] min-h-[44px]",
        lg: "h-12 rounded-lg px-8 text-base min-w-[44px] min-h-[44px]",
        xl: "h-14 rounded-xl px-10 text-lg min-w-[44px] min-h-[44px]",
        icon: "h-11 w-11 min-w-[44px] min-h-[44px]",
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
