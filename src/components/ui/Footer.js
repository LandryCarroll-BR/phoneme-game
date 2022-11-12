export function Footer({ intent, children, src, ...props }) {
  return (
    <nav className="w-full bg-surface-dark-600 flex justify-start items-center sticky bottom-0">
      <span className="p-3 text-surface-dark-100">
        © {new Date().toLocaleDateString().split("/")[2]}
      </span>
    </nav>
  );
}
