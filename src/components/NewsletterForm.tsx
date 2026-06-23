"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-3"
    >
      <input
        type="email"
        placeholder="Your email address"
        className="px-4 py-3 rounded-xl text-sm text-gray-900 bg-white/90 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
        required
      />
      <button
        type="submit"
        className="bg-white text-brand-red font-semibold px-4 py-3 rounded-xl text-sm hover:bg-gray-100 transition-colors min-h-[44px]"
      >
        Subscribe
      </button>
    </form>
  );
}
