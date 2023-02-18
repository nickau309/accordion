import React from "react";
import questions from "./data";
import Question from "./Question";

export default function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-fuchsia-900 p-4 text-slate-800 lg:py-20">
      <div className="grid w-full max-w-5xl gap-4 rounded-2xl bg-white p-4 sm:gap-8 sm:rounded-3xl sm:p-8 lg:flex">
        <h1 className="px-2 text-center text-xl font-bold tracking-wider md:text-3xl lg:basis-72 lg:p-0 lg:text-left">
          Questions and Answers about Login
        </h1>
        <section className="grid gap-4 text-sm md:text-base lg:flex-1">
          {questions.map(({ id, ...rest }) => (
            <Question key={id} {...rest} />
          ))}
        </section>
      </div>
    </main>
  );
}
