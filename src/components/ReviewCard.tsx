import type { Review } from "@/data/site";
import StarRating from "./StarRating";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
          {review.author.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-gray-900 text-sm">{review.author}</p>
          <div className="flex items-center gap-2">
            <StarRating rating={review.rating} />
            <span className="text-xs text-gray-400">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
      {review.photoCount && (
        <p className="text-xs text-gray-400 mt-2">{review.photoCount} photo{review.photoCount > 1 ? "s" : ""}</p>
      )}
    </div>
  );
}
