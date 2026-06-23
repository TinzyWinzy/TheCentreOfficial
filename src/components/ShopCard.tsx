import type { Shop } from "@/data/site";

const CATEGORY_COLORS: Record<string, string> = {
  Grocery: "bg-brand-green-light text-brand-green",
  Hardware: "bg-brand-red-light text-brand-red",
  Beauty: "bg-pink-100 text-pink-700",
  "Food & Drink": "bg-amber-100 text-amber-700",
  Entertainment: "bg-purple-100 text-purple-700",
  Retail: "bg-blue-100 text-blue-700",
};

export default function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-lg">{shop.name}</h3>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[shop.category] || "bg-gray-100 text-gray-700"}`}
        >
          {shop.category}
        </span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{shop.description}</p>
    </div>
  );
}
