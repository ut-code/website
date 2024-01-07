import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { FiArrowRight } from "react-icons/fi";

type date = {
  year?: number;
  month: number;
  day: number;
};
function checkExpiration(expires: date) {
  const today = new Date();
  if (expires.year && today.getFullYear() > expires.year) {
    return false;
  }
  if (today.getMonth() > expires.month) {
    return false;
  }
  // new Date() は地方時らしいが、一応1日猶予を持たせる
  if (today.getDate() > expires.day) {
    return false;
  }
  return true;
}

export default function EventBanner({
  shortExplanation,
  link,
  children,
  expires,
}: {
  shortExplanation?: string;
  link?: string;
  children: ReactNode;
  expires:
    | "manual"
    | "expired"
    | {
        year?: number;
        month: number;
        day: number;
      };
}) {
  if (
    expires !== "expired" &&
    (expires === "manual" || checkExpiration(expires))
  ) {
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

  // has already expired
  return null;
}
