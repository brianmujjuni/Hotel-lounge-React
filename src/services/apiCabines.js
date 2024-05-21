import supabase from "./supabase";

export async function getCabines() {
  const { data, error } = await supabase.from("cabines").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabines").delete().eq("id", id);
  if (error) {
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
