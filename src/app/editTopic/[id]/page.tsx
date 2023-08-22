import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (err) {
    console.log("error in getTopicById", err);
  }
};

export default async function EditTopic({ params }: any) {
  const { id } = params;
  const { topic }: any = await getTopicById(id);
  return (
    <EditTopicForm
      id={id}
      title={topic.title}
      description={topic.description}
    />
  );
}
