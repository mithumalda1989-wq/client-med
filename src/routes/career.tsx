import { createFileRoute } from '@tanstack/react-router'
import CareerPage from '@/features/career'

export const Route = createFileRoute('/career')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CareerPage />
}
