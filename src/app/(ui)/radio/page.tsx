"use client";

import { Radio, RadioGroup } from "@/components/shared/Radio";
import { Stack, VStack } from "@/components/shared/Stack";

export default function RadioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="mx-auto mt-24 mb-20 flex w-[500px] flex-col space-y-2">
        <VStack gap={8} className="w-full">
          <RadioGroup defaultValue="default-1">
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-1">
                Default 1
              </label>
              <Radio value="default-1" id="radio-1" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-2">
                Default 2
              </label>
              <Radio value="default-2" id="radio-2" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-3">
                Default 3
              </label>
              <Radio value="default-3" id="radio-3" />
            </Stack>
          </RadioGroup>
          <RadioGroup defaultValue="success-1">
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-4">
                Success 1
              </label>
              <Radio value="success-4" variant="success" id="radio-4" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-5">
                Success 2
              </label>
              <Radio value="success-5" variant="success" id="radio-5" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-6">
                Success 3
              </label>
              <Radio value="success-6" variant="success" id="radio-6" />
            </Stack>
          </RadioGroup>
          <RadioGroup defaultValue="info-1">
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-7">
                Info 1
              </label>
              <Radio value="info-7" variant="info" id="radio-7" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-8">
                Info 2
              </label>
              <Radio value="info-8" variant="info" id="radio-8" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-9">
                Info 3
              </label>
              <Radio value="info-9" variant="info" id="radio-9" />
            </Stack>
          </RadioGroup>
          <RadioGroup defaultValue="warning-1">
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-10">
                Warning 1
              </label>
              <Radio value="warning-10" variant="warning" id="radio-10" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-11">
                Warning 2
              </label>
              <Radio value="warning-11" variant="warning" id="radio-11" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-12">
                Warning 3
              </label>
              <Radio value="warning-12" variant="warning" id="radio-12" />
            </Stack>
          </RadioGroup>
          <RadioGroup defaultValue="danger-1">
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-13">
                Danger 1
              </label>
              <Radio value="danger-13" variant="danger" id="radio-13" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-14">
                Danger 2
              </label>
              <Radio value="danger-14" variant="danger" id="radio-14" />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-15">
                Danger 3
              </label>
              <Radio value="danger-15" variant="danger" id="radio-15" />
            </Stack>
          </RadioGroup>
          <RadioGroup defaultValue="disabled-1">
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-16">
                Disabled 1
              </label>
              <Radio value="disabled-16" id="radio-16" disabled />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-17">
                Disabled 2
              </label>
              <Radio value="disabled-17" id="radio-17" disabled />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer" htmlFor="radio-17">
                Disabled 3
              </label>
              <Radio value="disabled-17" id="radio-17" disabled />
            </Stack>
          </RadioGroup>
          <RadioGroup defaultValue="hasError-1">
            <Stack justify="between">
              <label className="cursor-pointer text-red-500" htmlFor="radio-18">
                Has Error 1
              </label>
              <Radio value="hasError-18" id="radio-18" hasError />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer text-red-500" htmlFor="radio-19">
                Has Error 2
              </label>
              <Radio value="hasError-19" id="radio-19" hasError />
            </Stack>
            <Stack justify="between">
              <label className="cursor-pointer text-red-500" htmlFor="radio-20">
                Has Error 3
              </label>
              <Radio value="hasError-20" id="radio-20" hasError />
            </Stack>
          </RadioGroup>
        </VStack>
      </section>
    </main>
  );
}
