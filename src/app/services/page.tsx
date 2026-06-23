import { SERVICES, AMENITIES } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Services & Amenities"
          subtitle="Everything we offer to make your visit enjoyable."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5 items-start"
            >
              <span className="text-3xl shrink-0">{service.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionHeading
          title="Amenities"
          subtitle="We've got you covered."
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
    </div>
  );
}
