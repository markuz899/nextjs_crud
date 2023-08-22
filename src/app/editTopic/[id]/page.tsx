"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopicForm from "@/components/TopicForm";

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/topics/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (err) {
    console.log("error in getTopicById", err);
  }
};

export default function EditTopic({ params }: any) {
  const [data, setData] = useState<any>({});
  const router = useRouter();
  const { id } = params;

  const getData = async () => {
    const d = await getTopicById(id);
    setData(d.topic || {});
  };

  useEffect(() => {
    getData();
  }, [params]);

  const handleAction = async (data: any) => {
    let newTitle = data.get("title");
    let newDescription = data.get("description");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );

      if (!res.ok) {
        throw new Error("Error in put method");
      }
      router.refresh();
      router.push("/");
    } catch (err) {
      console.log("Error in handleSubmit in edit", err);
    }
  };
  return (
    <TopicForm
      action={handleAction}
      title={data.title}
      description={data.description}
    />
  );
}
