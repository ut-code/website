import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import { Link } from "gatsby";
import clsx from "clsx";
import Logo from "./Logo";

const links = [
  { title: "プロジェクト", to: "/projects/" },
  { title: "記事", to: "/articles/" },
  { title: "メンバー", to: "/members/" },
  { title: "参加", to: "/join/" },
  { title: "お問い合わせ", to: "/contact/" },
];

export default function GlobalHeader({ className }: { className?: string }) {
  return (
    <header className={clsx("relative", className)}>
      {/*
      <div className="flex gap-4 justify-center items-center px-1 py-3 md:py-1 bg-green-400">
        <span>ハッカソンを開催します</span>
        <Link
          to="/articles/2024-june-hackathon/"
          className="inline-flex items-center flex-shrink-0 gap-0.5 hover:underline"
        >
          詳細はこちら
          <FiArrowRight />
        </Link>
      </div>
      */}
      <div className="container mx-auto h-16 flex">
        <Link to="/" className="flex items-center px-4">
          <Logo className="w-36" variant="default" />
        </Link>
        <div aria-hidden className="flex-grow" />
        <ul className="hidden md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="flex items-center h-full px-6 hover:bg-gray-100"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Popover>
          <Popover.Button
            type="button"
            className="flex justify-center items-center w-16 h-full hover:bg-gray-100 md:hidden"
          >
            <FiMenu className="w-6 h-6 text-gray-600" />
          </Popover.Button>
          <Popover.Overlay />
          <Transition
            className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
            enter="transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-1"
            leave="transition-opacity"
            leaveFrom="opacity-1"
            leaveTo="opacity-0"
          >
            <Popover.Panel>
              <ul>
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </header>
  );
}
