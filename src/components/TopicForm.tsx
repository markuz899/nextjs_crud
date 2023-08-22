"use client";
import React from "react";

interface ITopicForm {
  title?: string;
  description?: string;
  action: any;
}

export default function TopicForm({ title, description, action }: ITopicForm) {
  return (
    <form className="flex flex-col gap-3 py-2" action={action}>
      <input
        className="border border-slate-500 px-8 py-2 text-black"
        type="text"
        placeholder="Topic title"
        defaultValue={title || ""}
        name="title"
        required
      />

      <input
        className="border border-slate-500 px-8 py-2 text-black"
        type="text"
        placeholder="Topic description"
        defaultValue={description || ""}
        name="description"
        required
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
