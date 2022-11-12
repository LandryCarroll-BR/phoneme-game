export function TopNav({ intent, children, src, ...props }) {
  return (
    <div className="sticky top-0 z-50">
      <nav className="w-screen bg-surface-dark-800 flex justify-start items-center ">
        <span className="font-bold text-base text-surface-dark-50 p-5 px-6">
          Ms. Spencers Class
        </span>
      </nav>
    </div>
  );
}
