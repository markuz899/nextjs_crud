"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TopicForm from "@/components/topicForm";

export default function AddTopic() {
  const router = useRouter();

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
          body: JSON.stringify({ title, description }),
        }
      );
      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (err) {
      console.log("Error in handleSubmit form");
    }
  };

  return <TopicForm action={handleAction} />;
}
