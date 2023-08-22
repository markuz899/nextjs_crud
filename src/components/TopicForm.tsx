"use client";
import React, { useState } from "react";

interface ITopicForm {
  title?: string;
  description?: string;
  action: any;
}

export default function TopicForm({ title, description, action }: ITopicForm) {
  const [activeToast, setActiveToast] = useState(false);

  const handleAction = async (data: any) => {
    action(data);
    setActiveToast(true);
  };
  return (
    <>
      {activeToast && (
        <div
          id="toast-top-right"
          className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-200 dark:divide-gray-700 space-x dark:bg-green-600"
          role="alert"
        >
          <div className="text-sm font-normal">
            Operation finished successfully
          </div>
        </div>
      )}
      <form className="flex flex-col gap-3 py-2" action={handleAction}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold leading-6"
          >
            Title
          </label>
          <div className="mt-2.5">
            <input
              id="title"
              type="text"
              placeholder="Topic title"
              defaultValue={title || ""}
              name="title"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold leading-6"
          >
            Description
          </label>
          <div className="mt-2.5">
            <input
              id="description"
              type="text"
              placeholder="Topic description"
              defaultValue={description || ""}
              name="description"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          className="rounded-md bg-green-600 hover:bg-green-800 shadow-sm font-bold transition-colors duration-200 text-white py-2 px-6 w-fit mt-5"
          type="submit"
        >
          {title ? "Update" : "Create"} topic
        </button>
      </form>
    </>
  );
}
