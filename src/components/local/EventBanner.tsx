import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { FiArrowRight } from "react-icons/fi";

export default function EventBanner({
  shortExplanation,
  link,
  linkText,
  children,
  enabled,
}: {
  shortExplanation?: string;
  link?: string;
  linkText?: string;
  children: ReactNode;
  enabled: boolean;
}) {
  if (enabled) {
    return (
      <div className="flex gap-4 justify-center items-center px-1 py-3 md:py-1 bg-green-400">
        <span className="hidden sm:inline">{children}</span>
        <span className="inline sm:hidden">{shortExplanation || children}</span>
        {link && (
          <Link
            to={link}
            className="inline-flex items-center flex-shrink-0 gap-0.5 hover:underline"
          >
            {linkText || "詳細はこちら"}
            <FiArrowRight />
          </Link>
        )}
      </div>
    );
  }

  // disabled
  return null;
}
