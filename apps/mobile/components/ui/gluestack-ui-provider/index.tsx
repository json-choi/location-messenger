import { OverlayProvider } from '@gluestack-ui/overlay'
import { ToastProvider } from '@gluestack-ui/toast'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { View } from 'react-native'

type Mode = 'light' | 'dark' | 'system'

interface GluestackUIProviderProps {
  mode?: Mode
  children: React.ReactNode
}

export function GluestackUIProvider({ mode = 'system', children }: GluestackUIProviderProps) {
  const { colorScheme, setColorScheme } = useColorScheme()

  React.useEffect(() => {
    if (mode !== 'system') {
      setColorScheme(mode)
    }
  }, [mode, setColorScheme])

  return (
    <View
      className="flex-1 bg-background-0 dark:bg-background-950"
      style={{ flex: 1 }}
    >
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </View>
  )
}
