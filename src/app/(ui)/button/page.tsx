"use client";

import { Button } from "@/components/shared/Button";
import { VStack } from "@/components/shared/Stack";

export default function ButtonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="mx-auto mt-24 mb-20 flex w-[500px] flex-col space-y-2">
        <VStack gap={6}>
          <VStack gap={2} align="center">
            <Button variant="primary">Click me!</Button>
            <Button variant="secondary">Click me!</Button>
            <Button variant="accent">Click me!</Button>
            <Button variant="success">Click me!</Button>
            <Button variant="info">Click me!</Button>
            <Button variant="warning">Click me!</Button>
            <Button variant="danger">Click me!</Button>
          </VStack>
          <VStack gap={2} align="center">
            <Button isLoading>Click me!</Button>
            <Button variant="secondary" isLoading>
              Click me!
            </Button>
            <Button variant="success" isLoading>
              Click me!
            </Button>
            <Button variant="info" isLoading>
              Click me!
            </Button>
            <Button variant="warning" isLoading>
              Click me!
            </Button>
            <Button variant="danger" isLoading>
              Click me!
            </Button>
            <Button variant="outline" isLoading>
              Click me!
            </Button>
            <Button variant="primary" isLoading>
              Click me!
            </Button>
          </VStack>
        </VStack>
      </section>
    </main>
  );
}
