import { SERVICES, AMENITIES } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Services & Amenities"
          subtitle="Everything we offer to make your visit enjoyable."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5 items-start hover:shadow-lg hover:-translate-y-0.5 transition-all"
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
              key={amenity.label}
              className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 border border-gray-100 hover:border-brand-green/30 hover:bg-brand-green-light/50 transition-all"
            >
              <span className="text-lg shrink-0">{amenity.icon}</span>
              {amenity.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
