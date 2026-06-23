export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
