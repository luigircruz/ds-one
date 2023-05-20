"use client";

import { Button } from "@/components/shared/Button";
import { Stack } from "@/components/shared/Stack";

export default function ButtonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="mx-auto mt-24 mb-20 flex w-[500px] flex-col space-y-2">
        <Stack gap={2}>
          <Button>Click me!</Button>
          <Button disabled>Click me!</Button>
          <Button variant="outline">Click me!</Button>
        </Stack>
      </section>
    </main>
  );
}
