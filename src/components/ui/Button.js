import { cva } from "cva";

const PictureStyles = cva(
  "inline-flex items-center rounded-md shadow-md border border-transparent font-bold",
  {
    variants: {
      intent: {
        primary:
          " bg-indigo-600 px-6 py-3 text-base text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      },
      size: {
        xl: "",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "xl",
    },
  }
);

export function Button({ intent, size, children, ...props }) {
  return (
    <button className={PictureStyles({ intent, size })} {...props}>
      {children}
    </button>
  );
}
