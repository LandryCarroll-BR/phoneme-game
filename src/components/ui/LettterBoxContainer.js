import clsx from "clsx";

export function LetterBoxContainer({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        "flex gap-4 flex-wrap justify-center items-center"
      )}
      {...props}>
      {children}
    </div>
  );
}
