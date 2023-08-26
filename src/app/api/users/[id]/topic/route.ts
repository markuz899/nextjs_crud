import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

export const GET = async (request: any, { params }: any) => {
  try {
    await connectMongoDB();

    const prompts = await Topic.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
