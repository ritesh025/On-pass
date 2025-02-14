"use server";
import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

interface Card {
  cardNo: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
}

interface Password {
  website: string;
  username: string;
  password: string;
}

export async function addCardServer(
  cardNo: string,
  cardHolder: string,
  expiry: string,
  cvv: string,
  userId: string
) {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  let cards: Card[] = [];
  if (Array.isArray(user.privateMetadata.cards)) {
    cards = user.privateMetadata.cards || [];
    cards.push({ cardNo, cardHolder, expiry, cvv });
    await client.users.updateUserMetadata(userId, {
      privateMetadata: {
        cards: cards,
      },
    });
  } else {
    await client.users.updateUserMetadata(userId, {
      privateMetadata: {
        cards: [{ cardNo, cardHolder, expiry, cvv }],
      },
    });
  }
}


//delete card function
export async function deleteCardServer(cardNo: string, userId: string) {
  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    const cards: Card[] = Array.isArray(user.privateMetadata.cards)
      ? user.privateMetadata.cards.filter((card) => card.cardNo !== cardNo)
      : [];

    await client.users.updateUserMetadata(userId, {
      privateMetadata: { cards },
    });

    return { success: true, message: "Card deleted successfully" };
  } catch (error) {
    console.error("Error deleting card:", error);
    return { success: false, message: "Failed to delete card" };
  }
}


export async function addPasswordServer(
  website: string,
  username: string,
  password: string,
  userId: string
) {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  let passwords: Password[] = Array.isArray(user.privateMetadata.passwords)
    ? user.privateMetadata.passwords
    : []; // Ensure passwords is always an array

  passwords.push({ website, username, password });

  await client.users.updateUserMetadata(userId, {
    privateMetadata: {
      passwords: passwords,
    },
  });
}


// delete password function
export async function deletePasswordServer(website: string, userId: string) {
  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    const passwords: Password[] = Array.isArray(user.privateMetadata.passwords)
      ? user.privateMetadata.passwords.filter(
          (password) => password.website !== website
        )
      : [];

    await client.users.updateUserMetadata(userId, {
      privateMetadata: { passwords },
    });

    return { success: true, message: "Password deleted successfully" };
  } catch (error) {
    console.error("Error deleting password:", error);
    return { success: false, message: "Failed to delete password" };
  }
}
