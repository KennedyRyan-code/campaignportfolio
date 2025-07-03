"use client";

export const CoffeeOptionCard = ({ option, onSelect }) => {
  return (
    <button
      className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
      onClick={() => onSelect(option)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
            {option.emoji}
          </span>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">{option.name}</h3>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-amber-600">
            KES {option.price}
          </div>
          <div className="text-xs text-gray-500">Click to select</div>
        </div>
      </div>
    </button>
  );
};
