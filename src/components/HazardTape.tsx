type Props = {
  height?: string;
  fine?: boolean;
  className?: string;
};

export function HazardTape({ height = "h-10", fine = false, className = "" }: Props) {
  return (
    <div
      role="presentation"
      aria-hidden
      className={`w-full ${height} ${fine ? "hazard-tape-fine" : "hazard-tape"} border-y border-black ${className}`}
    />
  );
}
