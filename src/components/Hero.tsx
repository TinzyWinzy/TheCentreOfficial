import { SITE } from "@/data/site";
import StarRating from "./StarRating";

export default function Hero() {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden min-h-screen flex items-center">
      <picture>
        <source srcSet="/images/hero.webp" type="image/webp" />
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105"
          loading="eager"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/20" />

      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-2xl rounded-full px-4 py-2 text-sm mb-8 border border-white/10 shadow-2xl"
            style={{ animation: "fade-in-up 0.6s ease-out forwards" }}
          >
            <StarRating rating={SITE.rating} size="sm" />
            <span className="ml-1 font-semibold">{SITE.rating}</span>
            <span className="text-white/60">({SITE.reviewCount} reviews on Google)</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]"
            style={{ animation: "fade-in-up 0.6s ease-out 0.1s both" }}
          >
            <span className="text-white">{SITE.name}</span>
            <br />
            <span className="bg-gradient-to-r from-brand-green to-amber-300 bg-clip-text text-transparent">
              Rusape
            </span>
          </h1>

          <p
            className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl"
            style={{ animation: "fade-in-up 0.6s ease-out 0.2s both" }}
          >
            Your hub for shopping &mdash; delivering to your loved ones back home
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{ animation: "fade-in-up 0.6s ease-out 0.3s both" }}
          >
            <a
              href={SITE.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-red to-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-2xl hover:shadow-red-500/30 hover:scale-105 transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order for Delivery
            </a>
            <a
              href={SITE.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-2xl border border-white/20 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/20 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>

          <div
            className="mt-10 inline-flex flex-wrap items-center gap-x-8 gap-y-3 bg-white/5 backdrop-blur-2xl rounded-2xl px-6 py-4 border border-white/10"
            style={{ animation: "fade-in-up 0.6s ease-out 0.4s both" }}
          >
            <span className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90">{SITE.hours}</span>
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {SITE.address}
            </span>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phone}
            </a>
          </div>

          <div className="mt-16 flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
