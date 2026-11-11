import { NextResponse } from "next/server";
import { sendContactEmailAction } from "@/actions/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let formData: FormData;

  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("multipart/form-data")) {
      return NextResponse.json(
        {
          success: false,
          message: "The contact form must be submitted as multipart form data.",
          statusCode: 415,
        },
        { status: 415 },
      );
    }

    formData = await req.formData();
  } catch (error: unknown) {
    console.warn("[API /api/contact] Invalid form request:", error);
    return NextResponse.json(
      {
        success: false,
        message: "The submitted contact form could not be read. Please try again.",
      },
      { status: 400 },
    );
  }

  try {
    const result = await sendContactEmailAction(formData);
    const status = result.success ? 200 : result.statusCode || 422;

    return NextResponse.json(result, { status });
  } catch (error: unknown) {
    console.error("[API /api/contact] Unexpected processing error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We could not process your inquiry right now. Please try again or email sales@triadz.in directly.",
      },
      { status: 500 },
    );
  }
}
