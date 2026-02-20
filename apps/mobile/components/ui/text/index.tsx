import { tva } from '@gluestack-ui/nativewind-utils/tva'
import React from 'react'
import { Text as RNText } from 'react-native'

const textVariants = tva({
  base: 'text-typography-900 dark:text-typography-0 font-body',
  variants: {
    size: {
      '2xs': 'text-2xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    bold: {
      true: 'font-bold',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    muted: {
      true: 'text-typography-400',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface TextProps extends React.ComponentProps<typeof RNText> {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikeThrough?: boolean
  muted?: boolean
  className?: string
}

const Text = React.forwardRef<React.ComponentRef<typeof RNText>, TextProps>(
  ({ size = 'md', bold, italic, underline, strikeThrough, muted, className, ...props }, ref) => {
    return (
      <RNText
        ref={ref}
        className={textVariants({ size, bold, italic, underline, strikeThrough, muted, class: className })}
        {...props}
      />
    )
  },
)

Text.displayName = 'Text'

export { Text }
export type { TextProps }
