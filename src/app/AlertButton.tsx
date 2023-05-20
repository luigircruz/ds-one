"use client";

import { Button } from "@/components/shared/Button";

export const AlertButton = () => {
  return (
    <section className="flex flex-col gap-4">
      <Button variant="primary" shape="rounded" size="md">
        Hello
      </Button>
      <Button variant="secondary" shape="rounded" size="md">
        Hello
      </Button>
      <Button variant="accent" shape="rounded" size="md">
        Hello
      </Button>
      <Button variant="success" shape="pill" size="md">
        Hello
      </Button>
      <Button variant="info" shape="pill" size="md">
        Hello
      </Button>
      <Button variant="warning" shape="pill" size="md">
        Hello
      </Button>
      <Button variant="danger" shape="pill" size="md">
        Hello
      </Button>
      <Button variant="outline" shape="pill" size="md">
        Hello
      </Button>
    </section>
  );
};
