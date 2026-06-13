import bgImage from "../../assets/img/bgimg.jpg";

const BackgroundBlur = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-400">
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-105 opacity-30 dark:opacity-10
          transition-opacity duration-400
        "
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "blur(6px) saturate(1.12)",
        }}
      />

      <div className="absolute inset-0 bg-white/10 dark:bg-slate-950/80 transition-colors duration-400" />
    </div>
  );
};

export default BackgroundBlur;
