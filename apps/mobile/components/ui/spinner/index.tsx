import { tva } from '@gluestack-ui/nativewind-utils/tva'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const spinnerVariants = tva({
  base: '',
  variants: {
    size: {
      small: '',
      large: '',
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

interface SpinnerProps {
  size?: 'small' | 'large'
  color?: string
  className?: string
}

function Spinner({ size = 'small', color, className }: SpinnerProps) {
  return (
    <ActivityIndicator
      size={size}
      color={color ?? '#004E64'}
      className={spinnerVariants({ size, class: className })}
    />
  )
}

export { Spinner }
export type { SpinnerProps }
