import { createFileRoute } from '@tanstack/react-router'
import { Home } from '@/features/home'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
}
