import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ info, title }) {
  return (
    <Disclosure
      as="article"
      className="rounded-xl border-2 border-gray-200 py-4 px-6 shadow-[0_5px_15px_rgba(0,0,0,.1)] sm:rounded-2xl"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between gap-4">
            <span className="text-left font-bold tracking-wider">{title}</span>
            <span className="flex aspect-square w-6 min-w-[1.5rem] items-center justify-center rounded-full bg-gray-200 text-base text-red-700 sm:w-8">
              {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 text-slate-700">
            {info}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
