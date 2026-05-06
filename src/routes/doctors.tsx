import { createFileRoute } from '@tanstack/react-router'
import { Doctors } from '@/features/doctors'

export const Route = createFileRoute('/doctors')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Doctors />
}
