"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ShopCard from "@/components/ShopCard";
import ReviewCard from "@/components/ReviewCard";
import StarRating from "@/components/StarRating";
import {
  SHOPS,
  REVIEWS,
  SITE,
  AMENITIES,
  DIASPORA_STEPS,
  DIASPORA_PRODUCTS,
  DIASPORA_FAQ,
} from "@/data/site";

function DiasporaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto mt-12 space-y-3">
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Frequently Asked Questions</h3>
      {DIASPORA_FAQ.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors min-h-[44px]"
          >
            <span>{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-400 shrink-0 ml-2 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function TrustSignal({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-white">{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Diaspora Delivery Section */}
      <section id="diaspora" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-red-600 to-red-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Sending Love Back Home?
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-white/60" />
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              In the diaspora? Order goods from our shops and we deliver directly to your family and relatives in Rusape.
            </p>
          </div>

          {/* 3-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {DIASPORA_STEPS.map((step) => (
              <div key={step.step} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/10">
                <div className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  {step.step < DIASPORA_STEPS.length && (
                    <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <TrustSignal icon="🔒" label="Secure Payments" />
            <TrustSignal icon="📱" label="Real-time Updates" />
            <TrustSignal icon="❤️" label="Serving Rusape families" />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {DIASPORA_PRODUCTS.map((product) => (
              <div
                key={product.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="text-2xl block mb-1">{product.icon}</span>
                <span className="text-xs font-medium text-white/80">{product.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={SITE.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-red font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Start an Order
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {SITE.phone}
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <DiasporaFaq />
        </div>
      </section>

      {/* Shops Section */}
      <section id="shops" className="py-20 md:py-28">
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
          <div className="text-center mt-10">
            <a
              href="/shops"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red bg-brand-red-light px-6 py-3 rounded-xl hover:bg-brand-red hover:text-white transition-all"
            >
              Browse All Shops
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 md:py-28 bg-brand-green-light">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="What People Say"
            subtitle={`Rated ${SITE.rating} out of 5 from ${SITE.reviewCount} reviews on Google`}
          />

          {/* Rating Summary */}
          <div className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{SITE.rating}</div>
                <StarRating rating={SITE.rating} size="md" />
                <div className="text-xs text-gray-400 mt-0.5">{SITE.reviewCount} reviews</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">Google Rating</div>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  Verified on Google
                </div>
              </div>
            </div>
          </div>

          {/* Featured Review */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ReviewCard review={REVIEWS[0]} featured />
            <div className="grid grid-cols-1 gap-6">
              {REVIEWS.slice(1, 3).map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </div>

          {/* Mobile Carousel (2nd row) */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {REVIEWS.slice(0, 4).map((review, i) => (
                <div key={i} className="w-[280px] shrink-0">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                See all reviews on Google
              </a>
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Location Section */}
      <section id="amenities" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Amenities & Location"
            subtitle="Everything you need for a great visit."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Amenities Badges */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Offer</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {AMENITIES.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 border border-gray-100 hover:border-brand-green/30 hover:bg-brand-green-light/50 transition-all"
                  >
                    <span className="text-lg shrink-0">{amenity.icon}</span>
                    {amenity.label}
                  </div>
                ))}
              </div>

              {/* Parking info */}
              <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">🅿️</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Free Parking Available</p>
                    <p className="text-xs text-gray-600 mt-0.5">On-site parking, free street parking, and a free parking lot available.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Directions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
              <div className="rounded-xl overflow-hidden border border-gray-200 h-[280px] mb-4">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-5 py-3 rounded-xl hover:bg-red-700 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 font-medium px-5 py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {SITE.phone}
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-3">{SITE.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
