import { auth, currentUser } from '@clerk/nextjs'

export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()
  if (!userId || !user) {
    return <div>N está logado</div>
  }
  return <p>dashboard</p>
}
