import PharmacyComponent from '@/features/pharmacy'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pharmacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PharmacyComponent/>
}
