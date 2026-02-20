// Design System — Linear/Vercel style
// Zinc dark palette + Blue accent
// Use these only for native props requiring direct color values
// (Ionicons/Lucide color, Switch trackColor, placeholderTextColor, ActivityIndicator)

export const colors = {
  // Backgrounds
  bg: {
    base: '#09090B',     // zinc-950 — app background
    surface: '#111113',  // slightly lighter — cards, panels
    elevated: '#18181B', // zinc-900 — modals, sheets
    subtle: '#27272A',   // zinc-800 — hover, dividers
  },
  // Text
  text: {
    primary: '#FAFAFA',   // zinc-50
    secondary: '#A1A1AA', // zinc-400
    muted: '#71717A',     // zinc-500
    disabled: '#3F3F46',  // zinc-700
  },
  // Border
  border: {
    subtle: '#27272A',  // zinc-800
    default: '#3F3F46', // zinc-700
    strong: '#52525B',  // zinc-600
  },
  // Accent — Blue
  accent: {
    DEFAULT: '#3B82F6', // blue-500
    light: '#60A5FA',   // blue-400
    dark: '#2563EB',    // blue-600
    muted: 'rgba(59,130,246,0.12)',
  },
  // Status
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  // Utility
  white: '#FFFFFF',
  // Legacy compat — primary alias for blue accent
  primary: {
    DEFAULT: '#3B82F6',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
  },
  secondary: {
    DEFAULT: '#A1A1AA',
    500: '#A1A1AA',
  },
  gray: {
    100: '#F5F5F5',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
  },
} as const
