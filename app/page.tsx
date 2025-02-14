import { AddCards } from "@/Components/add-cards";
import { AddPasswords } from "@/Components/add-passwords";
import Footer from "@/Components/footer";
import { YourCards } from "@/Components/your-cards";
import { YourPasswords } from "@/Components/your-passwords";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  console.log(user?.privateMetadata);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="border-b">
        <div className="container mx-auto py-6">
          <b>
            <h1 className="flex justify-center text-3xl font-bold text-foreground">
              Password Manager
            </h1>
          </b>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 space-y-8 flex-grow">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              Add a Credit Card
            </h2>
            <AddCards />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              Add a Password
            </h2>
            <AddPasswords />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Your Cards</h2>
            <YourCards
              cards={
                Array.isArray(user?.privateMetadata.cards)
                  ? user?.privateMetadata.cards
                  : []
              }
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              Your Passwords
            </h2>
            <YourPasswords
              passwords={
                Array.isArray(user?.privateMetadata?.passwords)
                  ? user.privateMetadata.passwords
                  : []
              }
              addPassword={AddPasswords}
            />
          </div>
        </div>
      </main>

      {/* Footer Section (Added Here) */}
      <Footer />
    </div>
  );
}
