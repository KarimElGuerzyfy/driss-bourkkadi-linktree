import LinkButton from "./LinkButton";

function LinksSection() {
  return (
    <div
      className="rounded-[36px] border border-white/40 flex flex-col gap-3 px-6 py-12"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <LinkButton icon="/facebook.png" href="#" color="#1877F7" />
      <LinkButton icon="/behance.png" href="#" color="#1877F7" />
      <LinkButton icon="/whatsapp.png" href="#" color="#25D366" />
      <LinkButton icon="/linkedin.png" href="#" color="#0A66C2" />
      
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full rounded-full shadow-lg"
        style={{
          background: "linear-gradient(to right, #FFBB4F, #F14D59, #9C30AA)",
          height: "76px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <img src="/instagram.png" alt="" className="w-25 h-18 object-contain" />
      </a>
    </div>
  );
}

export default LinksSection;