import { supabase } from "../../../lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return Response.json({
      error: error.message,
    });
  }

  return Response.json({
    messages: data,
  });
}
