import { tva } from '@gluestack-ui/nativewind-utils/tva'
import React from 'react'
import { Text } from 'react-native'

const headingVariants = tva({
  base: 'text-typography-900 dark:text-typography-0 font-heading font-bold tracking-tight',
  variants: {
    size: {
      '2xs': 'text-xs',
      xs: 'text-sm',
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
      '2xl': 'text-4xl',
      '3xl': 'text-4xl',
      '4xl': 'text-4xl',
      '5xl': 'text-4xl',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

interface HeadingProps extends React.ComponentProps<typeof Text> {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  className?: string
}

const Heading = React.forwardRef<React.ComponentRef<typeof Text>, HeadingProps>(
  ({ size = 'lg', className, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={headingVariants({ size, class: className })}
        {...props}
      />
    )
  },
)

Heading.displayName = 'Heading'

export { Heading }
export type { HeadingProps }
