import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input data-slot="input" type={type} className={cn('flex h-10 w-full bg-muted min-w-0 rounded-md border border-input px-3 py-2 text-sm shadow-xs outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive', className)} {...props} />
}
export { Input }
