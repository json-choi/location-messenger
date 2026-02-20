import { tva } from '@gluestack-ui/nativewind-utils/tva'
import React from 'react'
import { TextInput, View } from 'react-native'

const inputWrapperVariants = tva({
  base: 'flex-row items-center rounded-lg border overflow-hidden',
  variants: {
    variant: {
      outline: 'border-outline-300 bg-background-0 focus:border-primary-500',
      filled: 'border-transparent bg-background-100',
      underlined: 'rounded-none border-0 border-b border-outline-300',
    },
    size: {
      sm: 'h-9 px-3',
      md: 'h-11 px-4',
      lg: 'h-13 px-4',
    },
    invalid: {
      true: 'border-error-500',
    },
    disabled: {
      true: 'opacity-40',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
})

const inputFieldVariants = tva({
  base: 'flex-1 text-typography-900 dark:text-typography-0 placeholder:text-typography-400',
  parentVariants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-md',
    },
  },
})

interface InputProps {
  variant?: 'outline' | 'filled' | 'underlined'
  size?: 'sm' | 'md' | 'lg'
  isInvalid?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  className?: string
  children?: React.ReactNode
}

interface InputFieldProps extends React.ComponentProps<typeof TextInput> {
  className?: string
}

const InputContext = React.createContext<Pick<InputProps, 'variant' | 'size'>>({
  variant: 'outline',
  size: 'md',
})

function Input({
  variant = 'outline',
  size = 'md',
  isInvalid = false,
  isDisabled = false,
  className,
  children,
}: InputProps) {
  return (
    <InputContext.Provider value={{ variant, size }}>
      <View
        className={inputWrapperVariants({
          variant,
          size,
          invalid: isInvalid,
          disabled: isDisabled,
          class: className,
        })}
      >
        {children}
      </View>
    </InputContext.Provider>
  )
}

function InputField({ className, ...props }: InputFieldProps) {
  const { size } = React.useContext(InputContext)
  return (
    <TextInput
      className={inputFieldVariants({ parentVariants: { size }, class: className })}
      placeholderTextColor="#9CA3AF"
      {...props}
    />
  )
}

function InputSlot({ className, children }: { className?: string; children: React.ReactNode }) {
  return <View className={`items-center justify-center px-2 ${className ?? ''}`}>{children}</View>
}

Input.Field = InputField
Input.Slot = InputSlot

export { Input, InputField, InputSlot }
export type { InputProps, InputFieldProps }
