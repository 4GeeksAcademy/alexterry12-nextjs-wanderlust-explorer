export default function HeroVideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 h-full w-full object-cover scale-105"
      aria-label="Cinematic travel hero background"
    >
      <source src="/travel.mp4" type="video/mp4" />
    </video>
  );
}
