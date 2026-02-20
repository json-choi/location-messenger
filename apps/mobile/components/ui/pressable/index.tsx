import { tva } from '@gluestack-ui/nativewind-utils/tva'
import React from 'react'
import { Pressable as RNPressable } from 'react-native'

const pressableVariants = tva({
  base: 'active:opacity-80',
  variants: {
    disabled: {
      true: 'opacity-40',
    },
  },
})

interface PressableProps extends React.ComponentProps<typeof RNPressable> {
  isDisabled?: boolean
  className?: string
}

const Pressable = React.forwardRef<React.ComponentRef<typeof RNPressable>, PressableProps>(
  ({ isDisabled, className, ...props }, ref) => {
    return (
      <RNPressable
        ref={ref}
        disabled={isDisabled}
        className={pressableVariants({ disabled: isDisabled, class: className })}
        {...props}
      />
    )
  },
)

Pressable.displayName = 'Pressable'

export { Pressable }
export type { PressableProps }
