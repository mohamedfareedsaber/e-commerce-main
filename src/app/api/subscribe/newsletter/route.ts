import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  // TODO
  console.log("RECIVED SOMEHTING");
  console.log(req)
  return NextResponse.json({ status: "ok" });
}
