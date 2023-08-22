import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

interface Topic {
  _id: string;
  title: string;
  description: string;
}

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (err) {
    console.log("Error in getTopics", err);
  }
};

export default async function TopicList() {
  const { topics } = (await getTopics()) || [];
  return (
    <>
      {topics &&
        topics.map((el: Topic) => (
          <div className="w-full">
            <div className="p-4 border border-slate-300 my-2 flex justify-between gap-5 items-start">
              <div>
                <h2 className="font-bold text-2xl">{el.title}</h2>
                <div>{el.description}</div>
              </div>

              <div className="flex gap-2">
                <RemoveBtn id={el._id} />
                <Link href={`/editTopic/${el._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
