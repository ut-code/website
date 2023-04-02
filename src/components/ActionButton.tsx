import React, { ReactNode } from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { FiArrowRight } from "react-icons/fi";

export default function ActionButton({
  to,
  variant = "light",
  className,
  children,
}: {
  to: string;
  variant?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      to={to}
      {...(!to.startsWith("/") ? { target: "_blank", rel: "noreferrer" } : {})}
      className={clsx(
        "flex items-center w-max px-6 py-3 gap-4 rounded-full bg-white text-black font-bold hover:brightness-95",
        variant === "light" && "border border-black",
        className
      )}
    >
      <div>{children}</div>
      <div>
        <FiArrowRight className="w-8 h-8" />
      </div>
    </Link>
  );
}
