"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const options = ["Social Life", "Personal Life"];

  return (
    <div className="threshold h-dynamic flex justify-end relative">
      <div className="space-y-8 w-1/2 p-16 overflow-hidden">
        <h2 className="font-extrabold text-5xl">Welcome</h2>
        <p>
          Whether article spirits new her covered hastily sitting her. Money
          witty books nor son add. Chicken age had evening believe but proceed
          pretend mrs.
          <br />
          <br />
          At missed advice my it no sister. Miss told ham dull knew see she spot
          near can. Spirit her entire her called. Detract yet delight written
          farther his general.
        </p>
        <Image src="/signature.png" alt="signature" width={97} height={51} />
        <button className="ring-2 ring-gray-300 hover:ring-gray-600 px-16 py-4 font-semibold cursor-pointer duration-200">
          Let's Connect
        </button>
        <div className="flex gap-12 py-8">
          {options.map((option, index) => (
            <h3
              key={index}
              className={`text-4xl cursor-pointer ${
                selected === index ? "" : "text-gray-300"
              }`}
              onClick={() => setSelected(index)}
            >
              {option}
            </h3>
          ))}
        </div>
      </div>

      <div className="w-1/2 px-32 h-dynamic overflow-y-hidden absolute -top-0 left-0">
        <Image
          className="w-full h-full object-cover object-top"
          src="/nirmal-dhakal.png"
          alt="nirmal-dhakal"
          width={530 / 2}
          height={1166 / 2}
        />
      </div>

      <p
        className="text-gray-100 absolute bottom-0 left-1/2 -translate-x-1/2 font-bold text-nowrap -z-10 w-full"
        style={{ fontSize: "calc(82rem / 7)" }}
      >
        Nirmal Dhakal
      </p>
    </div>
  );
}
