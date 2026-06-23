import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ShopCard from "@/components/ShopCard";
import ReviewCard from "@/components/ReviewCard";
import { SHOPS, REVIEWS, SITE, AMENITIES } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 md:py-20 bg-brand-red text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Sending Love Back Home?</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-white" />
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            In the diaspora? Order goods from our shops and we deliver directly to your family and relatives in Rusape.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/diaspora"
              className="inline-flex items-center gap-2 bg-white text-brand-red font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn How It Works
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Our Shops"
            subtitle="From everyday groceries to building materials — find it all under one roof."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOPS.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/shops"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-red hover:text-red-700 transition-colors"
            >
              View all shops &rarr;
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-green-light">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="What People Say"
            subtitle={`Rated ${SITE.rating} out of 5 from ${SITE.reviewCount} reviews on Google`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.slice(0, 4).map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Amenities"
            subtitle="Everything you need for a great visit."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 text-sm font-medium text-gray-700"
              >
                <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
