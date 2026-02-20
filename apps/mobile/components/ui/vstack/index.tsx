import { tva } from '@gluestack-ui/nativewind-utils/tva'
import React from 'react'
import { View } from 'react-native'

const vstackVariants = tva({
  base: 'flex-col',
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
      true: 'flex-col-reverse',
    },
  },
})

interface VStackProps extends React.ComponentProps<typeof View> {
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  reversed?: boolean
  className?: string
}

const VStack = React.forwardRef<React.ComponentRef<typeof View>, VStackProps>(
  ({ space, reversed, className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={vstackVariants({ space, reversed, class: className })}
        {...props}
      />
    )
  },
)

VStack.displayName = 'VStack'

export { VStack }
export type { VStackProps }
