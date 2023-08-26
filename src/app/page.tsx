import TopicList from "@/components/TopicList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Link href="/topic">Go to topic</Link>
    </main>
  );
}
