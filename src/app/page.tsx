import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-4 items-center justify-center p-24">
      <Link href="/button" className="hover:underline text-blue-500">
        Button
      </Link>
      <Link href="/stack" className="hover:underline text-black">
        Stack
      </Link>
    </main>
  );
}
