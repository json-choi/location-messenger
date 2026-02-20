import { tva } from '@gluestack-ui/nativewind-utils/tva'
import { withStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext'
import React from 'react'
import { ActivityIndicator, Pressable, Text } from 'react-native'

const buttonVariants = tva({
  base: 'flex-row items-center justify-center rounded-lg gap-2 active:opacity-80',
  variants: {
    variant: {
      solid: 'bg-primary-500',
      outline: 'border border-primary-500 bg-transparent',
      ghost: 'bg-transparent',
      link: 'bg-transparent',
    },
    size: {
      xs: 'px-3 py-1.5',
      sm: 'px-4 py-2',
      md: 'px-5 py-3',
      lg: 'px-6 py-3.5',
      xl: 'px-7 py-4',
    },
    disabled: {
      true: 'opacity-40',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

const buttonTextVariants = tva({
  base: 'font-semibold',
  parentVariants: {
    variant: {
      solid: 'text-typography-0',
      outline: 'text-primary-500',
      ghost: 'text-primary-500',
      link: 'text-primary-500 underline',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-md',
      xl: 'text-lg',
    },
  },
})

interface ButtonProps extends React.ComponentProps<typeof Pressable> {
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  isDisabled?: boolean
  fullWidth?: boolean
  className?: string
}

const ButtonContext = React.createContext<Pick<ButtonProps, 'variant' | 'size'>>({
  variant: 'solid',
  size: 'md',
})

const ButtonRoot = withStyleContext(
  React.forwardRef<React.ComponentRef<typeof Pressable>, ButtonProps>(
    (
      {
        children,
        variant = 'solid',
        size = 'md',
        isLoading = false,
        isDisabled = false,
        fullWidth = false,
        className,
        ...props
      },
      ref,
    ) => {
      return (
        <ButtonContext.Provider value={{ variant, size }}>
          <Pressable
            ref={ref}
            disabled={isDisabled || isLoading}
            className={buttonVariants({ variant, size, disabled: isDisabled || isLoading, fullWidth, class: className })}
            {...props}
          >
            {isLoading ? (
              <ActivityIndicator
                size="small"
                color={variant === 'solid' ? 'white' : '#004E64'}
              />
            ) : (
              children
            )}
          </Pressable>
        </ButtonContext.Provider>
      )
    },
  ),
)

function ButtonText({ className, ...props }: React.ComponentProps<typeof Text>) {
  const { variant, size } = React.useContext(ButtonContext)
  return (
    <Text
      className={buttonTextVariants({ parentVariants: { variant, size }, class: className })}
      {...props}
    />
  )
}

function ButtonIcon({ as: Icon, className }: { as: React.ElementType; className?: string }) {
  const { size } = React.useContext(ButtonContext)
  const sizeMap = { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }
  return <Icon size={sizeMap[size ?? 'md']} className={className} />
}

function ButtonSpinner({ className }: { className?: string }) {
  const { variant } = React.useContext(ButtonContext)
  return (
    <ActivityIndicator
      size="small"
      color={variant === 'solid' ? 'white' : '#004E64'}
      className={className}
    />
  )
}

const Button = Object.assign(ButtonRoot, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Spinner: ButtonSpinner,
})

export { Button, ButtonText, ButtonIcon, ButtonSpinner }
export type { ButtonProps }
