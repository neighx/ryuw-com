import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_TAG } from "@/lib/sanity/client";

// Called by a Sanity webhook whenever a work or category is published,
// unpublished or deleted — the site then refreshes without a redeploy.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Revalidation is not configured" }, { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);
    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    revalidateTag(SANITY_TAG, { expire: 0 });
    for (const path of ["/", "/music", "/epk"]) revalidatePath(path);

    return NextResponse.json({ revalidated: true, type: body?._type ?? null });
  } catch {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}
