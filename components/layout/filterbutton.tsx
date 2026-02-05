export default function FilterButton({ label }: { label: string }) {
  return (
    <button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm">
      {label}
    </button>
  );
}
