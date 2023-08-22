"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Topic {
  _id: string;
  title: string;
  description: string;
}

export default function AddTopic() {
  const router = useRouter();
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({ title, description }),
      });
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

  return (
    <form className="flex flex-col gap-3 my-2  py-2" onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 px-8 py-2 text-black"
        type="text"
        placeholder="Topic title"
        onChange={(evt: any) => setTitle(evt.target.value)}
        value={title}
      />

      <input
        className="border border-slate-500 px-8 py-2 text-black"
        type="text"
        placeholder="Topic description"
        onChange={(evt: any) => setDescription(evt.target.value)}
        value={description}
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add topic
      </button>
    </form>
  );
}
