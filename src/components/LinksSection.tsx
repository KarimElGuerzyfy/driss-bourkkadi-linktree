import LinkButton from "./LinkButton";
import { links } from "../data";

function LinksSection() {
  return (
    <div className="rounded-[36px] flex flex-col gap-3 px-4 py-2 min-[1440px]:px-6 min-[1440px]:py-12 min-[1440px]:bg-white/25 min-[1440px]:backdrop-blur-md min-[1440px]:border min-[1440px]:border-white/40">
      {links.map((link) => (
        <LinkButton
          key={link.label}
          label={link.label}
          icon={link.icon}
          href={link.href}
          background={link.background}
        />
      ))}
    </div>
  );
}

export default LinksSection;
