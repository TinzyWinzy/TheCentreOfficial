import type { Shop } from "@/data/site";
import { SITE } from "@/data/site";

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
          href={`${SITE.social.whatsapp}?text=Hi%20The%20Centre!%20I%27d%20like%20to%20inquire%20about%20${encodeURIComponent(shop.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-red hover:text-red-700 bg-brand-red-light hover:bg-brand-red-light/80 px-3 py-1.5 rounded-lg transition-colors min-h-[36px]"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Inquire
        </a>
        <span className="text-xs text-gray-400 px-1 py-1.5 flex items-center">
          Browse in store
        </span>
      </div>
    </div>
  );
}
