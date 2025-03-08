import clsx from "clsx";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import ActionButton from "./ActionButton";
import GlobalFooter from "./GlobalFooter";
import GlobalHeader from "./GlobalHeader";
import JoinUsCTA from "./JoinUsCTA.astro";

function Layout({ type, children }: { type: string; children: ReactNode }) {
  return (
    <>
      <GlobalHeader />
      {children}
      <JoinUsCTA
        className="mt-16"
        title={`ut.code(); で一緒に${type}しませんか？`}
      />
      <GlobalFooter />
    </>
  );
}
const coverImageClassName = "w-full h-72 md:h-96";

function Title({ Icon, children }: { Icon: IconType; children: ReactNode }) {
  return (
    <div className="container mt-12 mx-auto px-8 lg:max-w-screen-lg">
      <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-lg">
        <Icon className="w-6 h-6" />
      </div>
      <h1 className="mt-3 text-4xl">{children}</h1>
    </div>
  );
}

function Summary({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto mt-8 px-8 lg:max-w-screen-lg">
      <div className="prose max-w-none">{children}</div>
    </div>
  );
}

function Section({
  title,
  renderImage,
  linkLabel,
  linkTo,
  edge,
  children,
}: {
  title: string;
  renderImage(className: string): JSX.Element;
  linkLabel: string;
  linkTo: string;
  edge: "left" | "right";
  children: ReactNode;
}) {
  return (
    <section className="mt-16 lg:grid lg:items-center">
      <div style={{ gridArea: "1 / 1" }}>
        <div
          className={clsx(
            "overflow-clip isolate h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] lg:w-1/2",
            {
              left: "lg:ml-auto lg:rounded-l-2xl",
              right: "lg:rounded-r-2xl",
            }[edge],
          )}
        >
          {renderImage("w-full h-full")}
        </div>
      </div>
      <div
        style={{ gridArea: "1 / 1" }}
        className="container mx-auto lg:max-w-screen-lg"
      >
        <div className={clsx("p-8 lg:w-1/2", edge === "right" && "lg:ml-auto")}>
          <h2 className="text-4xl">{title}</h2>
          <div className="prose max-w-none mt-4">{children}</div>
          <ActionButton to={linkTo} className="mt-6">
            {linkLabel}
          </ActionButton>
        </div>
      </div>
    </section>
  );
}

export default {
  Layout,
  coverImageClassName,
  Title,
  Summary,
  Section,
};
