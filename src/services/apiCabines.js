import supabase from "./supabase";

export async function getCabines() {
  const { data, error } = await supabase.from("cabines").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
