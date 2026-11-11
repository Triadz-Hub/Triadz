import { NextResponse } from "next/server";
import { sendContactEmailAction } from "@/actions/mail";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const result = await sendContactEmailAction(formData);

    return NextResponse.json(result, {
      status: result.success ? 200 : 400,
    });
  } catch (error: unknown) {
    console.error("[API /api/contact] Error processing request:", error);
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    return NextResponse.json(
      {
        success: false,
        message: `Failed to process inquiry: ${message}`,
      },
      { status: 500 },
    );
  }
}

