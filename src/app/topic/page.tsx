"use client";

import TopicList from "@/components/TopicList";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session }: any = useSession();

  return (
    <main className="flex flex-col items-center justify-between">
      <TopicList session={session} />
    </main>
  );
}
