"use client";

import { forwardRef, useEffect, useRef } from "react";

const observerStore = new Map();

function getRevealObserver({ rootMargin, threshold, once }) {
   const key = `${rootMargin}|${threshold}|${once}`;
   const existingObserver = observerStore.get(key);

   if (existingObserver) {
      return existingObserver;
   }

   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("is-visible");

               if (once) {
                  observer.unobserve(entry.target);
               }
            } else if (!once) {
               entry.target.classList.remove("is-visible");
            }
         });
      },
      { rootMargin, threshold }
   );

   observerStore.set(key, observer);
   return observer;
}

const ScrollReveal = forwardRef(function ScrollReveal(
   {
      as: Component = "div",
      children,
      className = "",
      delay = 0,
      variant = "up",
      threshold = 0.04,
      rootMargin = "0px 0px -10% 0px",
      once = true,
      style,
      ...props
   },
   forwardedRef
) {
   const localRef = useRef(null);

   const setRefs = (node) => {
      localRef.current = node;

      if (typeof forwardedRef === "function") {
         forwardedRef(node);
      } else if (forwardedRef) {
         forwardedRef.current = node;
      }
   };

   useEffect(() => {
      const node = localRef.current;
      if (!node) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
         node.classList.add("is-visible");
         return;
      }

      const observer = getRevealObserver({ rootMargin, threshold, once });
      observer.observe(node);

      return () => observer.unobserve(node);
   }, [once, rootMargin, threshold]);

   return (
      <Component
         ref={setRefs}
         className={`scroll-reveal scroll-reveal--${variant} ${className}`.trim()}
         style={{ "--reveal-delay": `${delay}ms`, ...style }}
         {...props}
      >
         {children}
      </Component>
   );
});

export default ScrollReveal;
