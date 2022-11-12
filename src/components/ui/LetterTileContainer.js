export function LetterTileContainer({ children, ...props }) {
  return (
    <div
      className="flex gap-4 flex-wrap justify-center items-center"
      {...props}>
      {children}
    </div>
  );
}
