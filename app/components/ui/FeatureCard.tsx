'use client';

import { Clock, FileText, Link, DollarSign, Eye, Shield, Copyright } from "lucide-react";

interface FeatureCardProps {
  icon: "clock" | "file-text" | "link" | "dollar-sign" | "eye" | "shield" | "copyright";
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "clock":
        return <Clock className="mb-4 h-8 w-8 text-primary" />;
      case "file-text":
        return <FileText className="mb-4 h-8 w-8 text-primary" />;
      case "link":
        return <Link className="mb-4 h-8 w-8 text-primary" />;
      case "dollar-sign":
        return <DollarSign className="mb-4 h-8 w-8 text-primary" />;
      case "eye":
        return <Eye className="mb-4 h-8 w-8 text-primary" />;
      case "shield":
        return <Shield className="mb-4 h-8 w-8 text-primary" />;
      case "copyright":
        return <Copyright className="mb-4 h-8 w-8 text-primary" />;
      default:
        return <Clock className="mb-4 h-8 w-8 text-primary" />;
    }
  };

  return (
    <div className={`feature-card flex h-full flex-col items-center rounded-lg p-6 text-center ${className}`}>
      <div className="relative z-10 flex h-full flex-col items-center">
        {getIcon()}
        <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}