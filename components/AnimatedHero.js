import TextAnimation from "./TextAnimation";

export default function AnimatedHero() {
  const texts = [
    "혁신적인 메타버스",
    "무한한 가능성",
    "새로운 경험",
    "미래의 세계",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          당신을 위한{" "}
          <TextAnimation
            texts={texts}
            interval={3000}
            className="inline-block min-w-[200px]"
            textClassName="text-blue-400"
          />
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          메타버스의 새로운 지평을 열어갑니다
        </p>
      </div>
    </section>
  );
}
