"use client";

import { Checkbox } from "@/components/shared/Checkbox";
import { Stack } from "@/components/shared/Stack";

export default function CheckboxPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="mx-auto mt-24 mb-20 flex w-[500px] flex-col space-y-2">
        <Stack justify="between">
          <label htmlFor="checkbox-1" className="cursor-pointer">
            Default
          </label>
          <Checkbox id="checkbox-1" />
        </Stack>
        <Stack justify="between">
          <label htmlFor="checkbox-2" className="cursor-pointer">
            Success
          </label>
          <Checkbox id="checkbox-2" variant="success" />
        </Stack>
        <Stack justify="between">
          <label htmlFor="checkbox-3" className="cursor-pointer">
            Info
          </label>
          <Checkbox id="checkbox-3" variant="info" />
        </Stack>
        <Stack justify="between">
          <label htmlFor="checkbox-4" className="cursor-pointer">
            Warning
          </label>
          <Checkbox id="checkbox-4" variant="warning" />
        </Stack>
        <Stack justify="between">
          <label htmlFor="checkbox-5" className="cursor-pointer">
            Danger
          </label>
          <Checkbox id="checkbox-5" variant="danger" />
        </Stack>
        <Stack justify="between">
          <label htmlFor="checkbox-6" className="cursor-pointer">
            Disabled
          </label>
          <Checkbox id="checkbox-6" disabled />
        </Stack>
        <Stack justify="between">
          <label htmlFor="checkbox-7" className="cursor-pointer">
            Has Error
          </label>
          <Checkbox id="checkbox-7" hasError />
        </Stack>
      </section>
    </main>
  );
}
