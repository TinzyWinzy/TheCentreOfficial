export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">{title}</h2>
      <div className={`mt-3 h-1 w-16 rounded-full bg-brand-red ${centered ? "mx-auto" : ""}`} />
      {subtitle && <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
  );
}
