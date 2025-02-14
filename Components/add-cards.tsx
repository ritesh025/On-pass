"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { addCardServer } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formSchema = z.object({
  cardNumber: z
    .string()
    .min(16, { message: "Card number must be at least 16 characters." })
    .max(18, { message: "Card number cannot exceed 18 characters." })
    .regex(/^\d+$/, { message: "Card number can only contain digit values." }),
  cardHolder: z
    .string()
    .min(5, { message: "Card Holder name must contain at least 5 characters" }),
  expiryDate: z.date({
    required_error: "Expiry Date is required.",
  }),
  cvv: z
    .string()
    .length(3, { message: "CVV must be exactly 3 digits." })
    .regex(/^\d{3}$/, { message: "CVV must contain only numbers." }),
});

export function AddCards() {
  const user = useUser();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      cardHolder: "",
      expiryDate: undefined,
      cvv: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    if (user.user) {
      const formattedExpiryDate = values.expiryDate
        ? values.expiryDate.toLocaleDateString("en-US", {
            month: "2-digit",
            year: "2-digit",
          })
        : "";

      addCardServer(
        values.cardNumber,
        values.cardHolder,
        formattedExpiryDate,
        values.cvv,
        user?.user?.id
      );
      toast.success("Card Added Successfully");
      form.reset();
      router.refresh();
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          New Card
        </CardTitle>
        <CardDescription>Add a new credit card to your vault.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890123456" {...field} />
                  </FormControl>
                  <FormDescription>This is your card number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardHolder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Holder</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the card holder's name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              {/* Expiry Date with Date Picker */}
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        dateFormat="MM/yy"
                        showMonthYearPicker
                        className="w-full border rounded-md px-3 py-2"
                        placeholderText="MM/YY"
                      />
                    </FormControl>
                    <FormDescription>
                      Select your card's expiry date.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* CVV Input */}
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card CVV</FormLabel>
                    <FormControl>
                      <Input placeholder="123" type="text" {...field} />
                    </FormControl>
                    <FormDescription>This is your Card CVV.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Add Card
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
