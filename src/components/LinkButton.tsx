interface LinkButtonProps {
  icon: string;
  href: string;
  color: string;
}

function LinkButton({ icon, href, color }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-full rounded-full"
      style={{ backgroundColor: color, height: "76px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
    >
      <img src={icon} alt="" className="w-25 h-18 object-contain" />
    </a>
  );
}

export default LinkButton;