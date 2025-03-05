import Image from "next/image";

export default function Section({ data }) {
  const {
    id,
    title,
    subtitle,
    description,
    image,
    backgroundColor,
    textColor,
    alignment,
  } = data;

  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center snap-start"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container mx-auto px-6 py-20">
        <div
          className={`flex flex-col md:flex-row items-center ${
            alignment === "left" ? "md:flex-row-reverse" : ""
          } gap-10`}
        >
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">{title}</h2>
            <p className="text-xl md:text-2xl mb-6 opacity-90">{subtitle}</p>
            <p className="text-base md:text-lg opacity-80 max-w-lg">
              {description}
            </p>
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full text-white font-medium">
              자세히 알아보기
            </button>
          </div>
          <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden">
            <Image
              src={image || "/placeholder.jpg"}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
