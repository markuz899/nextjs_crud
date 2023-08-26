import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

interface Topic {
  _id: string;
  title: string;
  description: string;
  creator: any;
}

const getTopics = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/topics`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (err) {
    console.log("Error in getTopics", err);
  }
};

export default async function TopicList({ session }: any) {
  const { topics } = (await getTopics()) || [];
  return (
    <>
      {topics &&
        topics.map((el: Topic) => (
          <div className="w-full">
            <div className="p-4 border border-slate-300 my-2 flex justify-between gap-5 items-start rounded-md hover:bg-slate-600 transition-colors duration-200">
              <div>
                <h2 className="font-bold text-2xl">{el.title}</h2>
                <div>{el.description}</div>
              </div>

              <div className="flex gap-2">
                {el.creator._id === session?.user.id && (
                  <>
                    <RemoveBtn id={el._id} />
                    <Link href={`/topic/editTopic/${el._id}`}>
                      <HiPencilAlt size={24} />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
