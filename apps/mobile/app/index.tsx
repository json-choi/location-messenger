import { Redirect } from 'expo-router'
import { useUser } from '../contexts'

export default function Index() {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return null
  }

  if (!user) {
    return <Redirect href="/onboarding" />
  }

  return <Redirect href="/(tabs)" />
}
