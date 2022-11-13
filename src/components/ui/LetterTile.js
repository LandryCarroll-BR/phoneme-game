import { cva } from "cva";

const letterTileStyles = cva(
  "inline-flex items-center justify-center rounded-lg aspect-square text-xl font-bold shadow-md  transition-all duration-200  h-screen max-h-[64px]  lowercase",
  {
    variants: {
      intent: {
        primary:
          "bg-surface-dark-900 border-2 border-surface-dark-500 shadow hover:bg-surface-dark-500  focus:ring-brand-900 text-surface-dark-50",
        success:
          "bg-success-50 shadow-lg text-success-700 shadow-success-50 focus:ring-success-300 border-success-400 border-2",
        danger:
          "bg-danger-100 shadow-lg text-danger-700 focus:ring-danger-600 border-danger-400 border-2 animate-wiggle-once",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

const letterTileOverlayStyles = cva(
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

export function LetterTile({ intent, children, ...props }) {
  return (
    <div className="relative w-fit h-fit">
      <span className={letterTileOverlayStyles({ intent })}></span>
      <button className={letterTileStyles({ intent })} {...props}>
        {children}
      </button>
    </div>
  );
}
