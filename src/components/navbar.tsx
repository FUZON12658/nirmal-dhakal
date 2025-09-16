'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePageContext } from '@/contexts/PageContext';
import Image from 'next/image';

const ROUTES = [
  { index: 0, label: 'Welcome' },
  { index: 1, label: 'Social Life' },
  { index: 2, label: 'Personal Life' },
  // { path: '#lets-connect', label: "Let's Connect" },
] as Array<{ index?: number; path?: string; label: string }>;

const SOCIALS = [
  {
    link: 'https://www.facebook.com/dhakalnirmal',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 
      23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413
      c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 
      2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 
      1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.403 
      24 24 23.403 24 22.676V1.325C24 .597 23.403 0 
      22.675 0z"
        />
      </svg>
    ),
  },
  {
    link: 'https://www.x.com/l',
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_33)">
          <path
            d="M5.32379 12.9894C4.70669 12.9894 4.07153 12.9394 3.43255 12.8392C2.30713 12.6627 1.16788 12.074 0.845509 11.8977L0 11.4354L0.915405 11.1344C1.91606 10.8054 2.52477 10.6012 3.27828 10.2816C2.52379 9.91621 1.9423 9.25894 1.66238 8.40929L1.44943 7.7628L1.62406 7.78947C1.45846 7.62257 1.32771 7.45316 1.22635 7.29911C0.865868 6.75158 0.675013 6.08255 0.715623 5.50923L0.755688 4.94493L1.09352 5.0758C0.951007 4.80666 0.848013 4.51924 0.787479 4.21799C0.639956 3.48331 0.763418 2.70279 1.13522 2.02026L1.4295 1.48003L1.82308 1.95276C3.06783 3.44803 4.64442 4.33502 6.51562 4.59469C6.43919 4.06785 6.49646 3.55941 6.68601 3.10366C6.90669 2.57302 7.29929 2.12304 7.82101 1.8023C8.40043 1.44617 9.1031 1.27361 9.79956 1.3164C10.5385 1.3618 11.2094 1.63866 11.7422 2.1176C12.0024 2.04999 12.1941 1.9778 12.4532 1.88025C12.6091 1.82157 12.7859 1.75494 13.0072 1.67873L13.8224 1.39783L13.2908 2.91618C13.3259 2.91325 13.362 2.91074 13.3998 2.90911L14.2703 2.8697L13.7558 3.57291C13.7263 3.61319 13.7188 3.62462 13.7083 3.64041C13.6668 3.7029 13.6152 3.78064 12.909 4.7237C12.7322 4.95985 12.6439 5.26742 12.6603 5.5899C12.7229 6.81538 12.5726 7.92415 12.2132 8.88528C11.8733 9.7946 11.3465 10.5748 10.6478 11.2042C9.78312 11.9828 8.68056 12.516 7.3706 12.7886C6.72803 12.9223 6.03799 12.9894 5.32379 12.9894Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_33">
            <rect width="14.2703" height="14.2703" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  // {
  //   link: 'https://dribble.com',
  //   icon: (
  //     <svg
  //       width="15"
  //       height="15"
  //       viewBox="0 0 15 15"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_1_35)">
  //         <path
  //           d="M11.2078 3.20503C11.6444 2.71847 11.8989 2.20905 11.9882 1.68613C10.7537 0.652378 9.16565 7.62939e-06 7.43325 7.62939e-06C6.53875 7.62939e-06 5.68572 0.173117 4.89661 0.476003C6.218 1.7999 7.32307 3.36747 8.18742 5.05958C9.46102 4.59904 10.5225 3.96899 11.2078 3.20503Z"
  //           fill="black"
  //         />
  //         <path
  //           d="M11.83 3.76354C11.063 4.61841 9.92291 5.31368 8.56079 5.81896C8.73009 6.19022 8.88567 6.56921 9.0321 6.95309C9.73162 6.80263 10.4566 6.71706 11.196 6.71706C12.3599 6.71706 13.4907 6.91455 14.5334 7.27754C14.5344 7.22974 14.5406 7.18325 14.5406 7.13513C14.5406 5.29462 13.8314 3.62069 12.6795 2.35711C12.5095 2.84682 12.2274 3.32075 11.83 3.76354Z"
  //           fill="black"
  //         />
  //         <path
  //           d="M0.433228 5.63322C1.32196 5.79033 2.30661 5.88091 3.25251 5.88091C4.71882 5.88091 6.12731 5.67274 7.38263 5.3152C6.51762 3.65325 5.40559 2.12368 4.07831 0.844528C2.27199 1.81601 0.878303 3.57388 0.433228 5.63322Z"
  //           fill="black"
  //         />
  //         <path
  //           d="M14.4613 8.13841C13.4527 7.75877 12.3426 7.55322 11.196 7.55322C10.5532 7.55322 9.92193 7.62061 9.31311 7.74363C9.93119 9.59721 10.2888 11.6007 10.3499 13.6372C12.5243 12.6535 14.1138 10.5815 14.4613 8.13841Z"
  //           fill="black"
  //         />
  //         <path
  //           d="M0.270264 7.13516C0.270264 9.33397 1.33015 11.3302 2.90337 12.6348C3.07006 11.5259 3.57 10.435 4.38427 9.52199C5.35281 8.43609 6.69685 7.62291 8.2189 7.15878C8.07726 6.7934 7.92255 6.43521 7.75924 6.08202C6.39919 6.4854 4.86734 6.71708 3.25253 6.71708C2.26461 6.71708 1.23652 6.62269 0.304559 6.45894C0.283437 6.68181 0.270264 6.90696 0.270264 7.13516V7.13516Z"
  //           fill="black"
  //         />
  //         <path
  //           d="M5.00854 10.0784C4.18601 11.0008 3.74039 12.0826 3.68323 13.1893C4.77338 13.87 6.05602 14.2703 7.43327 14.2703C8.15738 14.2703 8.85603 14.1601 9.51482 13.9579C9.48281 11.8762 9.13333 9.82942 8.49794 7.94547C7.10708 8.36257 5.88367 9.09714 5.00854 10.0784Z"
  //           fill="black"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_1_35">
  //           <rect
  //             width="14.2703"
  //             height="14.2703"
  //             fill="white"
  //             transform="translate(0.270264)"
  //           />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // },
  // {
  //   link: 'https://behance.com',
  //   icon: (
  //     <svg
  //       width="15"
  //       height="15"
  //       viewBox="0 0 15 15"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_1_42)">
  //         <path
  //           d="M5.58526 5.04478H3.91296V6.71707H5.58526C6.04623 6.71707 6.42141 6.3419 6.42141 5.88093C6.42141 5.41995 6.04623 5.04478 5.58526 5.04478Z"
  //           fill="black"
  //         />
  //         <path
  //           d="M5.58526 7.55323H3.91296V9.22553H5.58526C6.04623 9.22553 6.42141 8.85035 6.42141 8.38938C6.42141 7.92841 6.04623 7.55323 5.58526 7.55323Z"
  //           fill="black"
  //         />
  //         <path
  //           d="M10.1841 6.71706C9.63912 6.71706 9.17413 7.06655 9.00134 7.55321H11.3669C11.1942 7.06655 10.7292 6.71706 10.1841 6.71706Z"
  //           fill="black"
  //         />
  //         <path
  //           d="M12.6926 0H2.6309C1.47836 0 0.540527 0.937837 0.540527 2.09037V12.1799C0.540527 13.3324 1.47836 14.2703 2.6309 14.2703H12.6926C13.8451 14.2703 14.8108 13.3324 14.8108 12.1799V2.09037C14.8108 0.937837 13.8451 0 12.6926 0ZM8.51181 4.20861H11.8564V5.04476H8.51181V4.20861ZM7.25759 8.38936C7.25759 9.31163 6.50756 10.0617 5.58529 10.0617H3.07684V4.20861H5.58529C6.50756 4.20861 7.25759 4.95864 7.25759 5.88091C7.25759 6.38282 7.03091 6.82844 6.6798 7.13514C7.03091 7.44183 7.25759 7.88745 7.25759 8.38936ZM12.2745 8.38936H9.00131C9.17398 8.87602 9.63909 9.22551 10.1841 9.22551C10.6304 9.22551 11.0468 8.98501 11.2709 8.59796L11.9943 9.0169C11.6217 9.66111 10.9279 10.0617 10.1841 10.0617C9.03157 10.0617 8.09374 9.12382 8.09374 7.97128C8.09374 6.81875 9.03157 5.88091 10.1841 5.88091C11.3366 5.88091 12.2745 6.81875 12.2745 7.97128V8.38936Z"
  //           fill="black"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_1_42">
  //           <rect
  //             width="14.2703"
  //             height="14.2703"
  //             fill="white"
  //             transform="translate(0.540527)"
  //           />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // },
  // {
  //   link: 'https://vimeo.com',
  //   icon: (
  //     <svg
  //       width="16"
  //       height="15"
  //       viewBox="0 0 16 15"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_1_47)">
  //         <path
  //           d="M0.810791 4.15086L1.0048 4.87301L1.0195 4.86319C1.41515 4.60051 1.72805 4.39303 2.0796 4.39303C2.39371 4.39303 2.69431 4.56212 2.91815 4.89516C4.13612 6.70588 5.07809 13.0026 7.35725 13.0026C9.60669 13.0026 15.256 6.13733 15.0769 3.03948C14.9879 1.5006 13.8877 1.27065 13.2396 1.27065C11.9917 1.27065 10.7478 2.04276 10.12 3.51947C11.1915 3.34733 11.9507 3.94905 11.8691 5.05104C11.7748 6.3027 9.6792 9.5369 8.70402 9.5369C7.03695 9.5369 6.25698 3.90498 5.69922 2.19537C5.55953 1.76863 5.15561 1.50344 4.64434 1.50344C4.28136 1.50344 3.90563 1.64296 3.58587 1.89669C2.84912 2.48096 2.098 3.08203 1.36899 3.68811L0.810791 4.15086Z"
  //           fill="black"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_1_47">
  //           <rect
  //             width="14.2703"
  //             height="14.2703"
  //             fill="white"
  //             transform="translate(0.810791)"
  //           />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // },
  {
    link: 'https://linkedin.com',
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_49)">
          <path
            d="M12.261 0H2.17143C1.01889 0 0.0810547 0.937837 0.0810547 2.09037V12.1799C0.0810547 13.3324 1.01889 14.2703 2.17143 14.2703H12.261C13.4135 14.2703 14.3513 13.3324 14.3513 12.1799V2.09037C14.3513 0.937837 13.4135 0 12.261 0ZM5.12582 11.3159H3.45352V5.46284H5.12582V11.3159ZM5.12582 4.62669H3.45352V2.95439H5.12582V4.62669ZM10.9789 11.3159H9.30656V7.97128C9.30656 7.51031 8.93138 7.13514 8.47041 7.13514C8.00944 7.13514 7.63426 7.51031 7.63426 7.97128V11.3159H5.96197V5.46284H7.63426V5.77803C8.07237 5.64183 8.35697 5.46284 8.88849 5.46284C10.0226 5.46404 10.9789 6.48146 10.9789 7.68386V11.3159Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_49">
            <rect
              width="14.2703"
              height="14.2703"
              fill="white"
              transform="translate(0.0810547)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const Navbar = () => {
  const { selected, setSelected, options } = usePageContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="threshold flex justify-between items-center h-24 relative">
      <h2 className="text-3xl">
        <Image src="/signature.svg" alt="signature" width={81} height={57} />
      </h2>

      {/* Desktop Navigation */}
      <nav className="hidden max-82rem:hidden lg:block">
        <ul className="flex space-x-18">
          {ROUTES.map((route) => (
            <li key={route.label}>
              {route.path ? (
                <Link
                  href={route.path}
                  className={`underline-offset-4 font-medium hover-underline-animation  `}
                >
                  {route.label}
                </Link>
              ) : (
                <button
                  onClick={() => setSelected(route.index!)}
                  className={`underline-offset-4 font-bold hover-underline-animation cursor-pointer ${
                    route.label === options[selected]
                      ? 'text-black'
                      : 'text-gray-500'
                  }`}
                >
                  {route.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Social Links */}
      <div className="hidden max-82rem:hidden lg:flex space-x-2">
        {SOCIALS.map((social) => (
          <a
            href={social.link}
            target="_blank"
            className="p-2"
            key={social.link}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex flex-col space-y-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
          <nav className="threshold py-4">
            <ul className="space-y-4">
              {ROUTES.map((route) => (
                <li key={route.label}>
                  {route.path ? (
                    <Link
                      href={route.path}
                      className={`block py-2 font-medium hover:text-gray-600 ${
                        route.label === options[selected] ? 'font-bold' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        setSelected(route.index!);
                        setIsMenuOpen(false);
                      }}
                      className={`block py-2 font-medium hover:text-gray-600 text-left ${
                        selected === route.index ? 'font-bold' : ''
                      }`}
                    >
                      {route.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-6 pt-4 border-t border-gray-200">
              {SOCIALS.map((social) => (
                <a
                  href={social.link}
                  target="_blank"
                  className="p-2"
                  key={social.link}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Navbar;
