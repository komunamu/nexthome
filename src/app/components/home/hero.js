"use client";
import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Welcome to
          <br className="hidden lg:inline-block" />
          Dr. Ko's homepage
        </h1>
        <p className="mb-8 leading-relaxed">
          Accomplished developer and software engineer with a Ph.D., boasting a
          robust educational foundation in Information Technology and a wealth
          of experience across diverse projects and software development
          initiatives. I thrive on embracing new technologies and have a passion
          for continuous learning. Recently, I’ve been diving into Large
          Language Models (LLMs), expanding my expertise and contributions into
          the dynamic field of artificial intelligence.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Projects
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
