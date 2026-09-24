import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { data, error } = await supabase
    .from("keep_alive")
    .update({ updated_at: new Date().toISOString() })
    .eq("id", 1)
    .select("id, updated_at");

  if (error) {
    console.error("Keep-alive error:", error);

    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }

  console.log("Keep-alive updated rows:", data);

  if (!data || data.length === 0) {
    return NextResponse.json(
      { ok: false, error: "No se actualizó ninguna fila" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    updated: data,
  });
}