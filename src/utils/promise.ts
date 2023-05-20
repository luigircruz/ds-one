import { Fn } from "./types";

/**
 * Promised `setTimeout`
 *
 * @param ms Milliseconds to wait
 * @param callback Callback to run after `ms` milliseconds
 * @returns Promise that resolves after `ms` milliseconds
 *
 * @example
 * await sleep(1000)
 * await sleep(1000, () => console.log('Hello World!'))
 * await sleep(1000).then(() => console.log('Hello World!'))
 *
 */
export const sleep = (ms: number, callback?: Fn<any>) =>
  new Promise<void>((resolve) =>
    setTimeout(async () => {
      await callback?.();
      resolve();
    }, ms)
  );
