import { useEffect, useRef } from 'react'

/**
 * Attach to a container ref. When it enters the viewport the class
 * `is-visible` is added, which drives CSS transitions defined in index.css.
 */
export function useReveal<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
