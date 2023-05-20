"use client";

import { Button } from "@/components/shared/Button";
import { HStack, Stack, VStack } from "@/components/shared/Stack";

export default function StackPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="mx-auto mt-24 mb-20 flex w-[500px] flex-col space-y-2">
        <Stack gap={2}>
          <Button>Click me!</Button>
          <Button disabled>Click me!</Button>
          <Button variant="outline">Click me!</Button>
        </Stack>
        <Stack orientation="column" gap={2}>
          <Button>Click me!</Button>
          <Button disabled>Click me!</Button>
          <Button variant="outline">Click me!</Button>
        </Stack>
        <Stack orientation="column" className="bg-blue-400 p-4" gap={2}>
          <Stack gap={2}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack gap={4}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack gap={8}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack gap={12}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack gap={16}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack gap={20}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
        </Stack>
        <Stack gap={2}>
          <Stack flex={1}>
            <Button className="w-full">Click me!</Button>
          </Stack>
          <Button disabled>Click me!</Button>
          <Button variant="outline">Click me!</Button>
        </Stack>
        <Stack orientation="column" gap={2} className="bg-green-400 p-4">
          <Stack justify="start" gap={2}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack justify="center" gap={2}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack justify="end" gap={2}>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack justify="between">
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack justify="around">
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
          <Stack justify="evenly">
            <Button>Click me!</Button>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </Stack>
        </Stack>
        <Stack orientation="column" className="bg-yellow-400 p-4">
          <Stack justify="start">
            <Button>Click me!</Button>
          </Stack>
          <Stack justify="center">
            <Button>Click me!</Button>
          </Stack>
          <Stack justify="end">
            <Button>Click me!</Button>
          </Stack>
        </Stack>
        <HStack justify="evenly" className="bg-violet-400 p-4">
          <Button variant="info">Click me!</Button>
          <Button variant="info">Click me!</Button>
          <Button variant="info">Click me!</Button>
        </HStack>
        <VStack className="bg-amber-400 p-4">
          <Stack justify="start">
            <Button variant="success">Click me!</Button>
          </Stack>
          <Stack justify="center">
            <Button variant="success">Click me!</Button>
          </Stack>
          <Stack justify="end">
            <Button variant="success">Click me!</Button>
          </Stack>
        </VStack>
      </section>
    </main>
  );
}
