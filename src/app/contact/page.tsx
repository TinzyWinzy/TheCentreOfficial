import { SITE } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Get in Touch"
          subtitle="We'd love to hear from you. Visit us, give us a call, or find us on social media."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-sm text-gray-600">{SITE.address}</p>
              <p className="text-sm text-gray-500">Plus code: {SITE.plusCode}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                href={`tel:${SITE.phone}`}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {SITE.phone}
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-sm text-gray-600">{SITE.hours}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={SITE.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 h-[300px] md:h-auto">
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
        </div>
      </div>
    </div>
  );
}
