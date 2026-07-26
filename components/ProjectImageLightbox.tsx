"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ProjectImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
}

export const ProjectImageLightbox: React.FC<ProjectImageLightboxProps> = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  objectPosition = "top",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      {/* Preview Button/Container */}
      <button
        onClick={openLightbox}
        className={`relative w-full overflow-hidden block group focus:outline-none focus:ring-2 focus:ring-brand-purple cursor-pointer ${className}`}
        aria-label={`View larger image of ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${imageClassName}`}
          style={{ objectPosition }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-purple/0 group-hover:bg-brand-purple/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            Expand
          </div>
        </div>
      </button>

      {/* Fullscreen Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple z-10"
            aria-label="Close dialog"
            autoFocus
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full max-w-7xl h-full flex items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full min-h-[50vh] md:min-h-0 h-auto md:h-full max-h-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
