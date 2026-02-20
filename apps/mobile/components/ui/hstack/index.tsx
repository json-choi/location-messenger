import { tva } from '@gluestack-ui/nativewind-utils/tva'
import React from 'react'
import { View } from 'react-native'

const hstackVariants = tva({
  base: 'flex-row',
  variants: {
    space: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-4',
      xl: 'gap-6',
      '2xl': 'gap-8',
      '3xl': 'gap-12',
      '4xl': 'gap-16',
    },
    reversed: {
      true: 'flex-row-reverse',
    },
  },
})

interface HStackProps extends React.ComponentProps<typeof View> {
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  reversed?: boolean
  className?: string
}

const HStack = React.forwardRef<React.ComponentRef<typeof View>, HStackProps>(
  ({ space, reversed, className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={hstackVariants({ space, reversed, class: className })}
        {...props}
      />
    )
  },
)

HStack.displayName = 'HStack'

export { HStack }
export type { HStackProps }
