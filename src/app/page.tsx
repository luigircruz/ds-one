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
      <Link href="/switch" className="hover:underline text-red-500">
        Switch
      </Link>
      <Link href="/radio" className="hover:underline text-green-500">
        Radio
      </Link>
      <Link href="/checkbox" className="hover:underline text-yellow-500">
        Checkbox
      </Link>
      <Link href="/icon-button" className="hover:underline text-purple-500">
        Icon Button
      </Link>
    </main>
  );
}
