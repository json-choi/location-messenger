import React from 'react'
import { View } from 'react-native'

interface BoxProps extends React.ComponentProps<typeof View> {
  className?: string
}

const Box = React.forwardRef<React.ComponentRef<typeof View>, BoxProps>(
  ({ className, ...props }, ref) => {
    return <View ref={ref} className={className} {...props} />
  },
)

Box.displayName = 'Box'

export { Box }
export type { BoxProps }
