/**
 * Haptic feedback wrapper around the Vibration API.
 *
 * - iOS Safari does not support `navigator.vibrate` → silent no-op.
 * - Android Chrome / Samsung Internet / Firefox supports it.
 * - Persisted user preference in localStorage (`camivan-haptic`).
 *   Default is ON when API is available.
 */

const HAPTIC_KEY = 'camivan-haptic';

export type HapticPattern = 'tap' | 'success' | 'subtle' | 'light' | 'warn';

const PATTERNS: Record<HapticPattern, number | number[]> = {
  tap: 10,
  success: [10, 50, 20],
  subtle: 3,
  light: 5,
  warn: [30, 30, 30],
};

export function isHapticSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'vibrate' in navigator;
}

export function isHapticEnabled(): boolean {
  if (!isHapticSupported()) return false;
  const saved = window.localStorage.getItem(HAPTIC_KEY);
  return saved !== 'off'; // default ON
}

export function setHapticEnabled(enabled: boolean) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(HAPTIC_KEY, enabled ? 'on' : 'off');
  }
}

export function haptic(pattern: HapticPattern = 'tap') {
  if (!isHapticEnabled()) return;
  try {
    navigator.vibrate(PATTERNS[pattern]);
  } catch {
    /* silent */
  }
}
