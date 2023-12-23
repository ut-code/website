import React, { ReactNode } from "react";
import { FiGlobe } from "react-icons/fi";
import clsx from "clsx";
import ActionButton from "./ActionButton";

export default function ProjectLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <ActionButton to={href} className={clsx("mt-8 mb-0 flex", className)}>
      <FiGlobe
        size="1.5rem"
        style={{
          display: "inline-block",
          marginRight: "0.5rem",
        }}
      />
      <span style={{ verticalAlign: "middle", fontSize: "1rem" }}>
        {children}
      </span>
    </ActionButton>
  );
}
