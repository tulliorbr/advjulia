"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo-whitout-background.png";
import { Link } from "react-scroll";
import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      if (yOffset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full text-white px-5 md:px-16 lg:px-0 text-center fixed h-20 items-center justify-between lg:justify-around flex top-0 z-10 transition-all ease-linear duration-500 ${
        isScrolled ? "bg-secondary" : "bg-transparent "
      }`}
    >
      <Image
        src={logo}
        alt="logo"
        className="w-16 rounded-full"
        onClick={() => scroll.scrollToTop()}
      />
      <div className="lg:hidden cursor-pointer">
        <button onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-white`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`hidden lg:flex gap-5 cursor-pointer ${
          isMobileMenuOpen ? "hidden" : ""
        }`}
      >
        <Link to="inicio" spy={true} smooth={true} offset={1} duration={500}>
          Início
        </Link>
        <Link to="service" spy={true} smooth={true} offset={-90} duration={500}>
          Como posso te ajudar
        </Link>
        <Link to="destiny" spy={true} smooth={true} offset={-50} duration={500}>
          Sobre mim
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
          Onde me encontrar?
        </Link>
      </ul>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-100">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black text-3xl"
            >
              <X size={32} color="black" />
            </button>
          </div>
          <div className="flex flex-col items-center mt-36 justify-center p-5">
            <ul className="list-none p-0">
              <li className="mb-4">
                <Link
                  to="inicio"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black"
                >
                  Início
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black"
                >
                  Como posso te ajudar
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="destiny"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black"
                >
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black"
                >
                  Onde me encontrar?
                </Link>
              </li>
            </ul>
            <div className="mt-14 flex gap-4">
              <InstagramLogo
                size={32}
                onClick={() =>
                  window.open("https://www.instagram.com/juliarrauber/")
                }
                target="_blank"
                color="black"
              />
              <WhatsappLogo
                size={32}
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=55051996134321&text&type=phone_number&app_absent=0"
                  )
                }
                target="_blank"
                color="black"
              />
              <LinkedinLogo
                size={32}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/julia-rohers-rauber-b62910239/"
                  )
                }
                target="_blank"
                color="black"
              />
            </div>
          </div>
        </div>
      )}

      <ul className="hidden lg:flex gap-5 cursor-pointer">
        <InstagramLogo
          size={32}
          onClick={() =>
            window.open("https://www.instagram.com/juliarrauber/")
          }
          target="_blank"
        />
        <WhatsappLogo
          size={32}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=55051996134321&text&type=phone_number&app_absent=0"
            )
          }
          target="_blank"
        />
        <LinkedinLogo
          size={32}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/julia-rohers-rauber-b62910239/"
            )
          }
          target="_blank"
        />
      </ul>
    </header>
  );
}
