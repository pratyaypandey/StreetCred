import * as React from "react"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: number
    max?: number
    indicatorClassName?: string
  }
>(({ className, value, max = 100, indicatorClassName, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-[#363636]/20", className)}
      {...props}
    >
      <div
        className={cn("h-full w-full flex-1 bg-[#e72c61] transition-all", indicatorClassName)}
        style={{
          transform: `translateX(-${100 - ((value || 0) / max) * 100}%)`,
        }}
      />
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress }

