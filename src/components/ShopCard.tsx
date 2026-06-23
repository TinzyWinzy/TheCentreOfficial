import type { Shop } from "@/data/site";

const CATEGORY_COLORS: Record<string, string> = {
  Grocery: "bg-brand-green-light text-brand-green",
  Hardware: "bg-brand-red-light text-brand-red",
  Beauty: "bg-pink-100 text-pink-700",
  "Food & Drink": "bg-amber-100 text-amber-700",
  Entertainment: "bg-purple-100 text-purple-700",
  Retail: "bg-blue-100 text-blue-700",
};

const BORDER_COLORS: Record<string, string> = {
  Grocery: "border-brand-green/30 hover:border-brand-green",
  Hardware: "border-brand-red/30 hover:border-brand-red",
  Beauty: "border-pink-300 hover:border-pink-500",
  "Food & Drink": "border-amber-300 hover:border-amber-500",
  Entertainment: "border-purple-300 hover:border-purple-500",
  Retail: "border-blue-300 hover:border-blue-500",
};

const PLACEHOLDER_IMAGES: Record<string, string> = {
  grocery: "🥬",
  hardware: "🔨",
  salon: "💇",
  bar: "🍻",
  snooker: "🎱",
  general: "🏪",
};

export default function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div
      className={`group bg-white rounded-xl border-2 ${BORDER_COLORS[shop.category] || "border-gray-200 hover:border-gray-400"} p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {PLACEHOLDER_IMAGES[shop.id] || "🏪"}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{shop.name}</h3>
            <span
              className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mt-0.5 ${CATEGORY_COLORS[shop.category] || "bg-gray-100 text-gray-700"}`}
            >
              {shop.category}
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{shop.description}</p>
      <div className="flex gap-2">
        <a
          href={`tel:0782491166`}
          className="text-xs font-medium text-brand-red hover:text-red-700 bg-brand-red-light hover:bg-brand-red-light/80 px-3 py-1.5 rounded-lg transition-colors min-h-[36px] flex items-center"
        >
          Inquire
        </a>
        <span className="text-xs text-gray-400 px-1 py-1.5 flex items-center">
          Browse in store
        </span>
      </div>
    </div>
  );
}
