'use client';

interface PricingTierProps {
  type: string;
  rate: number;
  description: string;
  className?: string;
}

export default function PricingTier({
  type,
  rate,
  description,
  className = "",
}: PricingTierProps) {
  return (
    <div className={`interactive-card flex flex-col items-center p-4 text-center ${className}`}>
      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-2xl font-semibold text-primary">${rate}</span>
        <span className="text-sm text-muted-foreground">/per {type.toLowerCase()}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{type}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
