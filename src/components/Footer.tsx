import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">{SITE.name}</h3>
          <p className="text-sm leading-relaxed">{SITE.tagline}</p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
          <div className="text-sm space-y-2">
            <p>{SITE.address}</p>
            <a href={`tel:${SITE.phone}`} className="block hover:text-white transition-colors">
              {SITE.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-sm">
            <a href={SITE.social.facebook} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={SITE.social.instagram} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
