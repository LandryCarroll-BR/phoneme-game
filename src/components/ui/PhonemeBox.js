import { cva } from "cva";

const PhonemeBoxStyles = cva(
  "inline-flex items-center justify-center rounded-lg border border-transparent aspect-square text-xl font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200  h-screen max-h-[72px] capitalize",
  {
    variants: {
      intent: {
        primary:
          "bg-surface-dark-500 border-[2.5px] shadow border-surface-dark-700 focus:ring-brand-300 text-white",
        active:
          "border-[2.5px]  border-brand-400 text-brand-700 bg-brand-100 animate-small-bounce",
        success:
          "bg-success-200 shadow-lg text-success-900 focus:ring-success-400 border-success-800 border-[2.5px]",
        danger:
          "bg-danger-50 shadow-lg text-danger-700 shadow-danger-50 focus:ring-danger-300 border-danger-400 border-[2.5px] animate-wiggle-once",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

const PhonemeBoxOverlayStyles = cva(
  "absolute inline-flex h-full w-full rounded-xl opacity-75 -z-10",
  {
    variants: {
      intent: {
        primary: "",
        success: "bg-success-400 animate-ping-once",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export function PhonemeBox({ intent, children, ...props }) {
  return (
    <div className="relative w-fit h-fit">
      <span className={PhonemeBoxOverlayStyles({ intent })}></span>
      <div className={PhonemeBoxStyles({ intent })} {...props}>
        {children}
      </div>
    </div>
  );
}
