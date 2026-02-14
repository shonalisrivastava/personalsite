export function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8 space-y-2">
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-gray-600">{description}</p> : null}
    </div>
  );
}
