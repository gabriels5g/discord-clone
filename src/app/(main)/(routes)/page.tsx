import { UserButton, auth, currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { userId } = auth()
  const user = await currentUser()
  if(!userId || !user) {
    redirect("/sign-in")
  }

  return (
    <div>
        This is a protected route.
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
