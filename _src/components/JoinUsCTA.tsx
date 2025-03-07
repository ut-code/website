import React from "react";
import clsx from "clsx";
import ActionButton from "./ActionButton";

export default function JoinUsCTA({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <section className={clsx("py-12 bg-gray-100", className)}>
      <div className="container mx-auto px-4 lg:max-w-screen-lg">
        <h2 className="text-2xl leading-normal">{title}</h2>
        <p className="mt-4 text-gray-800">
          未経験からでも始められます。まずはお気軽にお声掛けください！
        </p>
        <ActionButton className="mt-6" to="/join/">
          ut.code(); に参加する
        </ActionButton>
      </div>
    </section>
  );
}
