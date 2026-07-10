import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Adds `is-visible` to every `[data-reveal]` inside the returned ref once it
 * scrolls into view, then stops observing it. Children of a
 * `[data-reveal-stagger]` element get an incremental `--reveal-i` so CSS can
 * offset their transition-delay.
 *
 * Reduced-motion users get everything revealed immediately, with no observer.
 *
 * Only observes what exists at mount. Do NOT put `data-reveal` on list items
 * that are re-rendered later (paginated or filtered results) — they would
 * never be observed, and would stay at opacity 0 forever.
 */
export default function useReveal() {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return undefined;

        const targets = root.querySelectorAll('[data-reveal]');

        // Index the children of each stagger group so CSS can cascade them.
        root.querySelectorAll('[data-reveal-stagger]').forEach((group) => {
            Array.from(group.children).forEach((child, i) => {
                child.style.setProperty('--reveal-i', i);
            });
        });

        if (prefersReducedMotion()) {
            targets.forEach((el) => el.classList.add('is-visible'));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            },
            // Fire slightly before the element reaches the fold, so the motion
            // has finished by the time it is comfortably in view.
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return rootRef;
}
