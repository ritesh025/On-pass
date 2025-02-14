import { KeyRound } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2">
          <KeyRound className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Password Manager</h1>
        </div>
      </div>
    </header>
  )
}

