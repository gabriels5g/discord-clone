'use client'
import { Plus } from 'lucide-react'
import { ActionTooltip } from '../action-tooltip'

export async function NavigationAction() {
  return (
    <div>
      <ActionTooltip align="center" label="Add a server" side="right">
        <button className="group flex items-center">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emeral-500">
            <Plus
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}
