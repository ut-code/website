import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { FiArrowRight } from "react-icons/fi";

export default function EventBanner({
  shortExplanation,
  link,
  children,
  active,
}: {
  shortExplanation?: string;
  link?: string;
  children: ReactNode;
  active: boolean;
}) {
  if (active) {
    return (
      <div className="flex gap-4 justify-center items-center px-1 py-3 md:py-1 bg-green-400">
        <span className="hidden sm:inline">{children}</span>
        <span className="inline sm:hidden">{shortExplanation || children}</span>
        {link && (
          <Link
            to={link}
            className="inline-flex items-center flex-shrink-0 gap-0.5 hover:underline"
          >
            詳細はこちら
            <FiArrowRight />
          </Link>
        )}
      </div>
    );
  }

  // inactive
  return null;
}
