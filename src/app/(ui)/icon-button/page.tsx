"use client";

import { CheckIcon } from "@/components/icons/Check";
import { IconButton } from "@/components/shared/IconButton";
import { VStack } from "@/components/shared/Stack";

export default function IconButtonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="mx-auto mt-24 mb-20 flex w-[500px] flex-col space-y-2">
        <VStack gap={6}>
          <VStack gap={2} align="center">
            <IconButton size="sm" variant="primary">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="sm" variant="secondary">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="sm" variant="accent">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="sm" variant="success">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="sm" variant="info">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="sm" variant="warning">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="sm" variant="danger">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
          </VStack>
          <VStack gap={2} align="center">
            <IconButton shape="circle" variant="primary">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton shape="circle" variant="secondary">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton shape="circle" variant="accent">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton shape="circle" variant="success">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton shape="circle" variant="info">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton shape="circle" variant="warning">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton shape="circle" variant="danger">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton shape="circle" variant="outline">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
          </VStack>
          <VStack gap={2} align="center">
            <IconButton size="lg" variant="primary">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="lg" variant="secondary">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="lg" variant="accent">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="lg" variant="success">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="lg" variant="info">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="lg" variant="warning">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton size="lg" variant="danger">
              <CheckIcon className="w-4 h-4" />
            </IconButton>
          </VStack>
          <VStack gap={2} align="center">
            <IconButton isLoading>Click me!</IconButton>
            <IconButton variant="secondary" isLoading>
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton variant="success" isLoading>
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton variant="info" isLoading>
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton variant="warning" isLoading>
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton variant="danger" isLoading>
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton variant="outline" isLoading>
              <CheckIcon className="w-4 h-4" />
            </IconButton>
            <IconButton variant="primary" isLoading>
              <CheckIcon className="w-4 h-4" />
            </IconButton>
          </VStack>
        </VStack>
      </section>
    </main>
  );
}
