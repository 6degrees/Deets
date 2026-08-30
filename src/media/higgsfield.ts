/**
 * Higgsfield video slots
 *
 * Drop silent, seamlessly looping MP4 + WebM exports into /public/media
 * using the filenames below, then set `ready: true` on that slot.
 *
 * Encoding: H.264 (High, yuv420p) + VP9 WebM. No audio track. Target < 4 MB
 * per clip. Loop on a still frame or a 2–4 frame cross-dissolve so the cut
 * is invisible. White / off-white void, saturated cyan→magenta→tangerine light.
 */

import { withBase } from "../lib/base"

export type VideoSlot = {
  /** Flip after the files exist in /public/media */
  ready: boolean
  desktopSrc: string
  desktopWebmSrc?: string
  mobileSrc?: string
  mobileWebmSrc?: string
  posterSrc?: string
  aspect: string
  duration: string
  notes: string
}

export const mediaSlots = {
  /**
   * OPENING — centered loader on a white void
   * Small D-mark animation. Play once, then reveal the site.
   */
  opening: {
    ready: true,
    desktopSrc: withBase("/media/opening.mp4"),
    posterSrc: withBase("/media/opening-poster.jpg"),
    aspect: "16 / 9",
    duration: "5s",
    notes: "Centered, muted, play-once. Mix-blend so the white frame disappears.",
  },

  /**
   * HERO — full-bleed looping film
   * object-cover fills the viewport. Poster: /media/hero.jpg
   */
  hero: {
    ready: true,
    desktopSrc: withBase("/media/hero-desktop.mp4"),
    posterSrc: withBase("/media/hero.jpg"),
    aspect: "16 / 9",
    duration: "loop",
    notes: "Full-bleed, muted, autoplay in view. Cover crop, never stretch.",
  },

  /**
   * TRUST — NFC activation
   * Aspect: 21:9 crop-safe 16:9 (1920×800 safe)
   * Duration: 3–4s
   * Loop: pulse that returns to idle
   * Scene: card tap → colorful light travels into a phone; white ground
   */
  trust: {
    ready: false,
    desktopSrc: withBase("/media/trust-nfc.mp4"),
    desktopWebmSrc: withBase("/media/trust-nfc.webm"),
    posterSrc: withBase("/media/trust-nfc-poster.jpg"),
    aspect: "16 / 9",
    duration: "3–4s",
    notes: "Lazy-load. Play only while in viewport.",
  },

  /**
   * FUNCTIONS — product capabilities film (#functions)
   * Aspect: 16:9
   * Duration: 6–8s
   * Scene: card flipping through uses (tap, QR, wallet) with the same light language
   */
  functions: {
    ready: true,
    desktopSrc: withBase("/media/functions-desktop.mp4"),
    aspect: "16 / 9",
    duration: "loop",
    notes: "Full-viewport after the template gallery. Cover crop, muted, play in view.",
  },

  /**
   * WHY · privacy panel
   * Aspect: 4:5 crop-safe. object-cover full-bleed.
   */
  privacy: {
    ready: false,
    desktopSrc: withBase("/media/trust/privacy.mp4"),
    posterSrc: withBase("/media/trust/privacy.jpg"),
    aspect: "4 / 5",
    duration: "loop",
    notes: "Still at /media/trust/privacy.jpg is live. Flip ready to use the MP4.",
  },

  /**
   * WHY · elegance panel
   * Aspect: 4:5 crop-safe (panel is portrait). object-cover full-bleed.
   * Duration: loop the Higgsfield export as-is, muted
   */
  elegance: {
    ready: false,
    desktopSrc: withBase("/media/trust/elegance.mp4"),
    posterSrc: withBase("/media/trust/elegance.jpg"),
    aspect: "4 / 5",
    duration: "loop",
    notes: "Still at /media/trust/elegance.jpg is live. Flip ready to use the MP4.",
  },
} satisfies Record<string, VideoSlot>

export const STORE_URL = "https://store.deets.pro"
export const CONTACT_EMAIL = "contact@deets.pro"
