"use client";
import { CreditCard, Trash2, Copy } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import toast from "react-hot-toast";

interface CardProps {
  cardNo: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
}

export function YourCards({ cards }: { cards: CardProps[] }) {
  // Function to copy text to clipboard
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Saved Cards
        </CardTitle>
        <CardDescription>Your stored credit cards.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 space-y-2 h-48 overflow-y-auto">
        {cards.length === 0 && (
          <p className="text-sm text-muted-foreground">No cards added yet.</p>
        )}
        {cards.map((card: CardProps) => (
          <div
            key={card.cardNo}
            className="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground"
          >
            <div className="grid gap-1">
              {/* Card Number */}
              <p className="font-medium flex items-center">
                Card No: {card.cardNo}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(card.cardNo, "Card Number")}
                  className="ml-2"
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </Button>
              </p>

              {/* CVV */}
              <p className="font-medium flex items-center">
                CVV: {card.cvv}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(card.cvv, "CVV")}
                  className="ml-2"
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </Button>
              </p>

              {/* Card Holder */}
              <p className="text-sm text-muted-foreground flex items-center">
                Holder Name: {card.cardHolder}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    copyToClipboard(card.cardHolder, "Card Holder")
                  }
                  className="ml-2"
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </Button>
              </p>

              {/* Expiry Date */}
              <p className="text-sm text-muted-foreground flex items-center">
                Expires on: {card.expiry}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(card.expiry, "Expiry Date")}
                  className="ml-2"
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </Button>
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
