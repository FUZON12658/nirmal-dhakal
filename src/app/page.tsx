"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform, PanInfo, ResolvedValues } from 'motion/react';
import ShinyText from "@/components/animation/shiny-text";
import Image from "next/image";
import { usePageContext } from "@/contexts/PageContext";
import { TextFade } from "@/components/animation/text-fade";

// Rolling Gallery Component
const GALLERY_IMGS = [
  'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=400',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=400',
  'https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=400',
  'https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=400',
  'https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=400',
  'https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=400',
  'https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=400',
  'https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=400'
];

const generateImageDimensions = (index:any) => {
  const seed = index * 2.5;
  const minWidth = 180;
  const maxWidth = 280;
  const minHeight = 120;
  const maxHeight = 200;
  
  const width = minWidth + (Math.sin(seed) + 1) * 0.5 * (maxWidth - minWidth);
  const height = minHeight + (Math.cos(seed * 1.3) + 1) * 0.5 * (maxHeight - minHeight);
  
  return { width: Math.round(width), height: Math.round(height) };
};

const RollingGallery = ({ autoplay = true, pauseOnHover = true, opacity = 0.2 }) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1200 : 1800;
  const faceCount = GALLERY_IMGS.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.2;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle:any) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 60,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

  const handleUpdate = (latest:any) => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_:any, info:any) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_:any, info:any) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center [perspective:1200px] pointer-events-none z-0" style={{ opacity }}>
      <motion.div
        drag="x"
        dragElastic={0.1}
        dragConstraints={{ left: 0, right: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={controls}
        onUpdate={handleUpdate}
        style={{
          transform: transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
        className="cursor-grab [transform-style:preserve-3d] active:cursor-grabbing pointer-events-auto"
      >
        {GALLERY_IMGS.map((url, i) => {
          const dimensions = generateImageDimensions(i);

          return (
            <div
              key={i}
              className="group absolute top-1/2 left-1/2 flex items-center justify-center [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                height: '300px',
                transform: `translate(-50%, -50%) rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                transformOrigin: 'center center'
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={url}
                  alt={`gallery-${i}`}
                  className="pointer-events-none rounded-xl object-cover transition-all duration-300 ease-out group-hover:scale-105 shadow-lg"
                  style={{
                    width: `${dimensions.width}px`,
                    height: `${dimensions.height}px`,
                    willChange: 'transform'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

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
    <div className="lg:h-dynamic min-h-[calc(100vh-6rem)] relative overflow-hidden">
      {/* Rolling Gallery Background */}
      <div className='-translate-x-72 translate-y-72'>
      <RollingGallery autoplay={true} pauseOnHover={true} opacity={0.9} />
      </div>
      <div className="threshold flex flex-col justify-start relative lg:flex-row lg:justify-end z-10">
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
              <div className="bg-gray-50 px-6 py-2 rounded-lg border-l-4 border-gray-300">
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
              {!selected && (
                <button className="ring-2 ring-gray-300 hover:ring-gray-600 px-4 py-2 lg:px-16 lg:py-4 font-semibold cursor-pointer duration-200">
                  Let's Connect
                </button>
              )}
            </div>
          </TextFade>
        </div>
        <div className="z-50 w-full px-8 h-auto relative order-1 lg:w-1/2 lg:px-32 lg:h-dynamic lg:overflow-y-hidden lg:absolute lg:-top-0 lg:left-0 flex items-center">
          <Image
            className={
              "w-full h-full max-h-[25rem] object-cover lg:max-h-[59.625rem] " +
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
            className="w-full h-full max-h-[59.625rem] object-cover object-top lg:max-h-[59.625rem]"
            src="/shimmering.png"
            alt="shimmering"
            width={1590 / 2}
            height={1590 / 2}
          />
        </div>
      </div>
      <div className="w-full left-0 md:-bottom-10 absolute z-20">
        <ShinyText
          text="Nirmal Dhakal"
          className="bg-black font-bold text-nowrap leading-[80%] text-[calc(100vw/6.7)] "
        />
      </div>
    </div>
  );
}