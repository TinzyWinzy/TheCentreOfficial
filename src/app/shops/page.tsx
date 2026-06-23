import { SHOPS } from "@/data/site";
import ShopCard from "@/components/ShopCard";
import SectionHeading from "@/components/SectionHeading";

export default function ShopsPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Shops at The Centre"
          subtitle="Multiple shops under one roof — groceries, hardware, salon, bar, snooker, and general goods."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOPS.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </div>
  );
}
