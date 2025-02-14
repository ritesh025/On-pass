import { AddCards } from "@/Components/add-cards"
import { AddPasswords } from "@/Components/add-passwords"
import { YourCards } from "@/Components/your-cards"
import { YourPasswords } from "@/Components/your-passwords"
import { KeyRound } from "@/Components/key-round"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <KeyRound className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Password Manager</h1>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-6 space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Add a Credit Card</h2>
            <AddCards />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Add a Password</h2>
            <AddPasswords />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Your Cards</h2>
            <YourCards cards={[]} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Your Passwords</h2>
            <YourPasswords passwords={[]} addPassword={function (website: string, username: string, password: string): void {
              throw new Error("Function not implemented.")
            } } />
          </div>
        </div>
      </main>
    </div>
  )
}

