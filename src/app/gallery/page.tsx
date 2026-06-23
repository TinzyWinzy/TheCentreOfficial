import SectionHeading from "@/components/SectionHeading";

const PHOTOS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  alt: `The Centre photo ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Gallery"
          subtitle="Take a look around The Centre."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-gray-200"
            >
              <div className="text-center p-4">
                <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">Photo {photo.id}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Photos coming soon. Follow us on social media for the latest updates.
        </p>
      </div>
    </div>
  );
}
