"use client";

import { useState } from "react";
import { Copy, KeyRound, Plus, Trash2 } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { toast } from "react-hot-toast";

interface Password {
  website: string;
  username: string;
  password: string;
}

export function YourPasswords({
  passwords,
  addPassword
}: {
  passwords: Password[];
  addPassword: (website: string, username: string, password: string) => void;
}) {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Copy function
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied!`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeyRound className="h-5 w-5" />
          Saved Passwords
        </CardTitle>
        <CardDescription>Your stored passwords.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 space-y-2 h-48 overflow-y-auto">
        {passwords.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No passwords added yet.
          </p>
        )}
        {passwords.map((pw, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground"
          >
            <div className="grid gap-1">
              <p className="font-medium">
                Website:{" "}
                <a
                  href={
                    pw.website.startsWith("http")
                      ? pw.website
                      : `https://${pw.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline hover:text-blue-700"
                >
                  <u>{pw.website}</u>
                </a>
              </p>
              <p className="font-medium">
                Username: {pw.username}{" "}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(pw.username, "Username")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </p>
              <p className="font-medium">
                Password: {pw.password}{" "}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(pw.password, "Password")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

