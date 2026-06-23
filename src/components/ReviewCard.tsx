import type { Review } from "@/data/site";
import StarRating from "./StarRating";

export default function ReviewCard({ review, featured = false }: { review: Review; featured?: boolean }) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 transition-all duration-300 ${
        featured
          ? "p-8 md:p-10 border-brand-green/30 bg-gradient-to-br from-white to-brand-green-light shadow-lg md:col-span-2"
          : "p-6 hover:shadow-lg hover:-translate-y-0.5"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`rounded-full bg-brand-green flex items-center justify-center text-sm font-semibold text-white ${
            featured ? "w-14 h-14 text-lg" : "w-10 h-10"
          }`}
        >
          {review.author.charAt(0)}
        </div>
        <div>
          <p className={`font-medium text-gray-900 ${featured ? "text-base" : "text-sm"}`}>{review.author}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating rating={review.rating} size={featured ? "md" : "sm"} />
            <span className="text-xs text-gray-400">{review.date}</span>
          </div>
        </div>
      </div>
      <p className={`text-gray-600 leading-relaxed ${featured ? "text-base md:text-lg italic" : "text-sm"}`}>
        {featured ? `"${review.text}"` : review.text}
      </p>
      {review.photoCount && (
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {review.photoCount} photo{review.photoCount > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
}
