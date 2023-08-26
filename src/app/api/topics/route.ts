import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { creator, title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ creator, title, description });
  return NextResponse.json(
    { message: "Topic Created", status: true },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find().populate("creator");
  return NextResponse.json({ topics });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic deleted", status: true },
    { status: 201 }
  );
}
