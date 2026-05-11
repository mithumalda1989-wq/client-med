import { createFileRoute } from '@tanstack/react-router'
import { Departments } from '@/features/Departments'

export const Route = createFileRoute('/departments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Departments />
}
