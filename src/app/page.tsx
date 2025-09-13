"use client";
import { TextFade } from "@/components/animation/text-fade";
import Image from "next/image";
import { usePageContext } from "@/contexts/PageContext";

export default function Home() {
  const { selected, setSelected, options } = usePageContext();

  const getContent = () => {
    switch (selected) {
      case 0:
        return {
          content:
            "Welcome to my digital space! I'm passionate about creating meaningful experiences through technology and design. With a love for innovation and problem-solving, I strive to build solutions that make a difference.\n\nWhen I'm not coding, you'll find me exploring new technologies, reading about design trends, or working on personal projects that challenge my creativity.",
        };
      case 1:
        return {
          content:
            "I believe in the power of community and meaningful connections. You'll often find me at tech meetups, design conferences, and networking events where I love sharing ideas and learning from others.\n\nI'm active on social platforms where I share my journey, insights about technology, and connect with like-minded individuals. Building relationships and collaborating with diverse teams energizes me.",
        };
      case 2:
        return {
          content:
            "Outside of work, I'm someone who values balance and personal growth. I enjoy reading books on philosophy and psychology, practicing mindfulness, and staying active through hiking and fitness.\n\nFamily and friends are incredibly important to me. I love hosting dinner parties, exploring new restaurants, and traveling to experience different cultures. These experiences shape my perspective and creativity.",
        };
      default:
        return {
          content: "Welcome to my digital space!",
        };
    }
  };

  return (
    <div className="lg:h-dynamic overflow-hidden">
      <div className="threshold flex flex-col justify-start relative lg:flex-row lg:justify-end">
        <div className="flex flex-col w-full p-8 overflow-hidden lg:w-1/2 lg:order-1 lg:p-16 order-2">
          <TextFade
            key={selected}
            direction="up"
            className="space-y-8 order-2 lg:order-1"
          >
            <h2 className="font-extrabold text-5xl">{options[selected]}</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {getContent().content}
            </p>
            <div className="flex justify-between items-center">
              <Image
                src="/signature.svg"
                alt="signature"
                width={81}
                height={57}
              />
              {!selected && (
                <button className="ring-2 ring-gray-300 hover:ring-gray-600 px-4 py-2 lg:px-16 lg:py-4 font-semibold cursor-pointer duration-200">
                  Let's Connect
                </button>
              )}
            </div>
          </TextFade>
          <div className="flex flex-col gap-4 py-4 lg:gap-8 lg:py-8 lg:flex-row items-center order-1 lg:order-2">
            {options.map((option, index) => (
              <h3
                key={index}
                className={`text-xl cursor-pointer ${
                  selected !== index ? "text-gray-300" : ""
                }`}
                onClick={() => setSelected(index)}
              >
                {option}
              </h3>
            ))}
          </div>
        </div>
        <div className="w-full px-8 h-auto relative top-0 order-1 lg:w-1/2 lg:px-32 lg:h-dynamic lg:overflow-y-hidden lg:absolute lg:-top-0 lg:left-0">
          <Image
            className="w-full h-full max-h-[400px] object-cover object-top lg:max-h-[954px]"
            src="/nirmal-dhakal.png"
            alt="nirmal-dhakal"
            width={530 / 2}
            height={1166 / 2}
          />
        </div>
      </div>
      <p
        className="text-gray-100 absolute top-50 left-1/2 font-bold text-nowrap leading-[80%] -z-10 w-full lg:bottom-0 lg:top-auto"
        style={{
          fontSize: "calc(100vw / 6.7)",
          transform: "translate(-50%, -20%)",
        }}
      >
        Nirmal Dhakal
      </p>
    </div>
  );
}
