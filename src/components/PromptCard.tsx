"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const PromptCard = ({
  post,
  handleEdit,
  handleDelete,
  handleTagClick,
}: any) => {
  const { data: session }: any = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState<any>("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.title);
    navigator.clipboard.writeText(post.title);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="prompt_card mb-5 p-4 border border-slate-300 my-2 gap-5 items-start rounded-md hover:bg-slate-600 transition-colors duration-200">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3"
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <Link
              href={`/profile/${post.creator._id}?name=${post.creator.username}`}
            >
              <h3 className="font-satoshi font-semibold text-gray-300">
                {post.creator.username}
              </h3>
            </Link>
            <p className="font-inter text-sm text-gray-400">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          {copied === post.title ? "Copied" : "Copy"}
        </div>
      </div>

      <p
        className="font-inter text-sm blue_gradient mt-3"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.title}
      </p>
      <p className="font-inter text-sm blue_gradient">{post.description}</p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer text-red-500"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
