function ProfileCard() {
  return (
    <div
      className="rounded-[36px] border border-white/40 p-6 flex flex-col items-center text-center gap-4"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <img
        src="/profile-pic.png"
        alt="Driss Bourkkadi"
        className="w-24 h-24 rounded-full object-cover"
      />
      <h1 className="text-white font-bold text-2xl tracking-widest uppercase">
        Driss Bourkkadi
      </h1>
      <p className="text-white/90 text-base leading-relaxed text-justify font-semibold">
        I am a Multidisciplinary Designer with 5 years of experience, specializing in bridging the gap between high-quality Product Photography and digital excellence. I leverage AI Visual Design and Strategic Web Research to create impactful brand identities. Expert in Figma, Adobe XD, and the full Adobe Creative Suite.
      </p>
    </div>
  );
}

export default ProfileCard;