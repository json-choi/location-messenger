// Design System - Native Props Only
// Use Tailwind classes (className) for styling via NativeWind
// Use these colors only for native props that require direct color values
// (e.g., ActivityIndicator color, Ionicons color, Switch trackColor, placeholderTextColor)

export const colors = {
  primary: {
    DEFAULT: '#004E64',
    500: '#004E64',
  },
  secondary: {
    DEFAULT: '#00A5CF',
    500: '#00A5CF',
  },
  white: '#FFFFFF',
  gray: {
    100: '#F5F5F5',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
  },
  success: {
    500: '#16A34A',
  },
  error: {
    500: '#DC2626',
  },
} as const
