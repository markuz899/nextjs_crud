"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }: any) {
  const router = useRouter();
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

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
    <form className="flex flex-col gap-3 py-2" onSubmit={handleSubmit}>
      <input
        onChange={(evt: any) => setTitle(evt.target.value)}
        className="border border-slate-500 px-8 py-2 text-black"
        type="text"
        placeholder="Topic title"
        value={newTitle}
      />

      <input
        onChange={(evt: any) => setDescription(evt.target.value)}
        className="border border-slate-500 px-8 py-2 text-black"
        type="text"
        placeholder="Topic description"
        value={newDescription}
      />

      <button
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        type="submit"
      >
        Update topic
      </button>
    </form>
  );
}
