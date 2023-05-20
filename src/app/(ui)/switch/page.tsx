"use client";

import { Stack } from "@/components/shared/Stack";
import { Switch } from "@/components/shared/Switch";

export default function SwitchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="mx-auto mt-24 mb-20 flex w-[500px] flex-col space-y-2">
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-1">
            Default
          </label>
          <Switch id="switch-1" />
        </Stack>
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-2">
            Success
          </label>
          <Switch id="switch-2" variant="success" />
        </Stack>
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-3">
            Info
          </label>
          <Switch id="switch-3" variant="info" />
        </Stack>
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-4">
            Warning
          </label>
          <Switch id="switch-4" variant="warning" />
        </Stack>
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-5">
            Danger
          </label>
          <Switch id="switch-5" variant="danger" />
        </Stack>
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-6">
            Disabled
          </label>
          <Switch id="switch-6" disabled />
        </Stack>
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-7">
            Small
          </label>
          <Switch id="switch-7" variant="success" size="sm" />
        </Stack>
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-8">
            Medium
          </label>
          <Switch id="switch-8" variant="info" size="md" />
        </Stack>
        <Stack justify="between">
          <label className="cursor-pointer" htmlFor="switch-9">
            Large
          </label>
          <Switch id="switch-9" variant="danger" size="lg" />
        </Stack>
      </section>
    </main>
  );
}
