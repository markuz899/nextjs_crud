"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TopicForm from "@/components/TopicForm";
import { useSession } from "next-auth/react";

export default function AddTopic() {
  const router = useRouter();
  const { data: session }: any = useSession();

  const handleAction = async (data: any) => {
    let title = data.get("title");
    let description = data.get("description");

    if (!title || !description) {
      alert("Title and description are required");
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/topics`,
        {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify({
            creator: session?.user.id,
            title,
            description,
          }),
        }
      );
      if (res.ok) {
        router.refresh();
        router.push("/topic");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (err) {
      console.log("Error in handleSubmit form");
    }
  };

  return <TopicForm action={handleAction} />;
}
