"use client";
import ShinyText from "@/components/animation/shiny-text";
import Image from "next/image";
import { usePageContext } from "@/contexts/PageContext";
import { TextFade } from "@/components/animation/text-fade";

export default function Home() {
  const { selected, setSelected, options } = usePageContext();

  const getContent = () => {
    switch (selected) {
      case 0:
        return {
          content:
            "Welcome to my digital space! I'm Nirmal Dhakal, an entrepreneur and tech enthusiast based in Bishalnagar, Kathmandu. As the Founder & CEO of Iru Tech Pvt Ltd, I'm passionate about leveraging technology to create innovative solutions that drive business growth.\n\nWith a Master's degree in Political Science and extensive experience in both technology and event management through EMall International, I bring a unique perspective that combines analytical thinking with creative problem-solving. Through Nivaan Holdings, I continue to explore new ventures and opportunities in the evolving business landscape.",
        };
      case 1:
        return {
          content:
            "Community service and leadership are integral parts of my life. I'm honored to serve as President of Rotary Club of Matribhumi Baluwatar for 2025/2026, where I work alongside dedicated individuals to make a positive impact in our community.\n\nAs an entrepreneur leading multiple ventures, I believe in the power of networking and collaboration. Whether it's through Rotary activities, tech industry events, or business forums, I'm always excited to connect with like-minded individuals who share a passion for innovation and social responsibility.",
        };
      case 2:
        return {
          content:
            "Family is the cornerstone of my life. I'm blessed to share this journey with my wonderful wife, Ankita Koirala, and our two amazing sons, Nivaan and Aniv Dhakal. They inspire me every day and remind me of what truly matters.\n\nI have deep respect for my mother, Ambika Dhakal, who has been my guiding light, and I cherish the strong bond I share with my brothers, Kamal and Bimal Dhakal. Born on August 14th, I believe in maintaining work-life balance while pursuing my entrepreneurial dreams and contributing to society through meaningful service.",
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

            {/* Personal Information Section - Only show on Welcome tab */}
            {selected === 0 && (
              <div className="bg-gray-50 px-6  py-2 rounded-lg border-l-4 border-gray-300">
                <h3 className="font-semibold text-xl mb-4 text-gray-800">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Email:</span>
                    <span className="text-gray-800">
                      hello@nirmaldhakal.com
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Address:</span>
                    <span className="text-gray-800">
                      Bishalnagar, Kathmandu
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">DOB:</span>
                    <span className="text-gray-800">14 Aug</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">
                      Blood Group:
                    </span>
                    <span className="text-gray-800">A+ve</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">
                      Nationality:
                    </span>
                    <span className="text-gray-800">Nepali</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">
                      Education:
                    </span>
                    <span className="text-gray-800">
                      M.A. Political Science
                    </span>
                  </div>
                </div>
              </div>
            )}

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
        <div className="z-50 w-full px-8 h-auto relative order-1 lg:w-1/2 lg:px-32 lg:h-dynamic lg:overflow-y-hidden lg:absolute lg:-top-0 lg:left-0 flex items-center">
          <Image
            className={
              "w-full h-full max-h-[400px] object-cover lg:max-h-[954px] " +
              (selected !== 1 ? "object-top" : "object-center")
            }
            src={
              selected === 0
                ? `/nirmal-dhakal.png`
                : selected === 1
                ? `/nirmal-dhakal-1.png`
                : `/nirmal-dhakal-2.png`
            }
            alt="nirmal-dhakal"
            width={530 / 2}
            height={1166 / 2}
          />
        </div>
        <div className="order-1 w-2/3 px-32 h-dynamic overflow-y-hidden absolute -top-0 -left-32">
          <Image
            className="w-full h-full max-h-[400px] object-cover object-top lg:max-h-[954px]"
            src="/shimmering.png"
            alt="shimmering"
            width={1590 / 2}
            height={1590 / 2}
          />
        </div>
      </div>
      <div className="w-full -translate-y-1/5 left-1/2 top-[50%] lg:-bottom-10 lg:top-auto">
        <ShinyText
          text="Nirmal Dhakal"
          className="bg-black font-bold text-nowrap leading-[80%] text-[calc(100vw/6.7)] "
        />
      </div>
    </div>
  );
}
