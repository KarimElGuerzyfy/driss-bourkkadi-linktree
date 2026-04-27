interface LinkButtonProps {
  icon: string;
  href: string;
  label: string;
  background: string;
}

function LinkButton({ icon, href, label, background }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center w-full rounded-full h-12 sm:h-19 shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-transform active:scale-95 ${background}`}
    >
      <img src={icon} alt="" className="w-22 sm:w-25 h-12 sm:h-19 object-contain" />
    </a>
  );
}

export default LinkButton;
