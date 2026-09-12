import logo from '../assets/images/logo.jpg';

export function Logo({ size = 44, className = '' }: { size?: number; className?: string }) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-gold/60 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={logo}
        alt="Roshan Restaurant & Pizza Time logo"
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
