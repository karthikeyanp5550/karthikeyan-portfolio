/**
 * General-purpose helpers shared across components.
 */

/**
 * Merge className strings/arrays/objects, skipping falsy values.
 * Lightweight alternative to `clsx`/`classnames` — no dependency required.
 *
 * @example
 * cn('btn', isActive && 'btn-active', { 'btn-disabled': disabled })
 */
export function cn(...inputs) {
  const classes = []

  for (const input of inputs) {
    if (!input) continue

    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(input)
    } else if (Array.isArray(input)) {
      const nested = cn(...input)
      if (nested) classes.push(nested)
    } else if (typeof input === 'object') {
      for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key) && input[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
}

/** Debounce: delays invoking fn until `wait` ms have passed since the last call. */
export function debounce(fn, wait = 200) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), wait)
  }
}

/** Throttle: ensures fn runs at most once every `limit` ms. */
export function throttle(fn, limit = 200) {
  let inThrottle = false
  return (...args) => {
    if (inThrottle) return
    fn(...args)
    inThrottle = true
    setTimeout(() => {
      inThrottle = false
    }, limit)
  }
}

/** Smooth-scrolls to a section by id, accounting for the fixed navbar. */
export function scrollToSection(id, offset = 0) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

/**
 * Format a date (Date object, timestamp, or ISO string) into a readable string.
 *
 * @param {Date|string|number} date
 * @param {object} options - Intl.DateTimeFormat options
 * @param {string} locale
 * @example formatDate(new Date()) // "15 Jul 2026"
 */
export function formatDate(date, options, locale = 'en-GB') {
  const d = date instanceof Date ? date : new Date(date)
  if (Number.isNaN(d.getTime())) return ''

  const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' }
  return new Intl.DateTimeFormat(locale, options ?? defaultOptions).format(d)
}

/** Basic email format check for lightweight client-side validation. */
export function isEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Clamp a number between min and max. */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
