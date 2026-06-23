import { SITE, DIASPORA_STEPS, DIASPORA_PRODUCTS } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function DiasporaPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Shop & Deliver to Your Loved Ones"
          subtitle="You&rsquo;re abroad but your family is back home. We help you buy and deliver — hassle free."
        />

        <div className="bg-brand-red text-white rounded-2xl p-8 md:p-12 text-center mb-16">
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Order any goods from our shops and we deliver straight to your parents, relatives, or friends in the Rusape area.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={SITE.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-red font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {SITE.phone}
            </a>
          </div>
        </div>

        <SectionHeading
          title="What You Can Send"
          subtitle="We can source and deliver a wide range of products."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {DIASPORA_PRODUCTS.map((product) => (
            <div
              key={product.label}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl block mb-2">{product.icon}</span>
              <span className="text-sm font-medium text-gray-700">{product.label}</span>
            </div>
          ))}
        </div>

        <SectionHeading
          title="How It Works"
          subtitle="Simple process from your phone to their doorstep."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIASPORA_STEPS.map((step) => (
            <div key={step.step} className="relative bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-lg mb-4">
                {step.step}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-2">Have questions? We&rsquo;re here to help.</p>
          <a
            href={SITE.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red hover:text-red-700 font-medium transition-colors"
          >
            Chat with us on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
