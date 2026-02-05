export default function FilterButton({ label }: { label: string }) {

  return (

    <button className="rounded-full border border-orange-300 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">

      {label}

    </button>

  );

}

