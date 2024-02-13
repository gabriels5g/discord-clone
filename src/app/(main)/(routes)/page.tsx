import { ModeToggle } from '@/components/menu-toggle'
import { UserButton, auth, currentUser } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { userId } = auth()
  const user = await currentUser()
  if(!userId || !user) {
    redirect("/sign-in")
  }

  return (
    <div>
      <ModeToggle />
        This is a protected route.
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
