interface FilterBarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function FilterBar({ categories, selected, onSelect }: FilterBarProps) {
  return (
    <div className="flex justify-center gap-3 mb-6 flex-wrap">
      <button
        onClick={() => onSelect("")}
        className={`px-4 py-1 rounded-full border ${
          selected === "" ? "bg-primary text-white" : "bg-gray-100"
        }`}
      >
        全部
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-1 rounded-full border ${
            selected === cat ? "bg-primary text-white" : "bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
