"use client";

import { useEffect, useRef } from "react";

type Testimonial = { image: string; alt: string };

const AUTOPLAY_INTERVAL_MS = 1500;
const RESUME_AFTER_INTERACTION_MS = 1200;

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef<{ id: number; x: number; scrollLeft: number } | null>(
    null,
  );
  const resumeTimeoutRef = useRef<number | null>(null);

  const pauseAutoplay = () => {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_AFTER_INTERACTION_MS);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = window.setInterval(() => {
      if (pausedRef.current) return;

      const track = carousel.firstElementChild as HTMLElement | null;
      const firstSlide = track?.firstElementChild as HTMLElement | null;
      if (!track || !firstSlide) return;

      const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
      const step = firstSlide.offsetWidth + gap;
      const loopWidth = step * testimonials.length;
      const next = carousel.scrollLeft + step;

      carousel.scrollTo({
        left: next >= loopWidth ? next - loopWidth : next,
        behavior: "smooth",
      });
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [testimonials.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    pauseAutoplay();

    // Touch devices keep the browser's native momentum scrolling.
    if (event.pointerType === "mouse") {
      dragRef.current = {
        id: event.pointerId,
        x: event.clientX,
        scrollLeft: carousel.scrollLeft,
      };
      carousel.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    const drag = dragRef.current;
    if (!carousel || !drag || drag.id !== event.pointerId) return;

    carousel.scrollLeft = drag.scrollLeft - (event.clientX - drag.x);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.id !== event.pointerId) return;
    dragRef.current = null;
    pauseAutoplay();
  };

  return (
    <div
      ref={carouselRef}
      className="testimonial-carousel"
      aria-label="Depoimentos de alunas"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
    >
      <div className="testimonial-track">
        {[...testimonials, ...testimonials].map(({ image, alt }, index) => (
          <figure key={`${image}-${index}`}>
            <img
              src={image}
              alt={alt}
              width="853"
              height="1844"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
