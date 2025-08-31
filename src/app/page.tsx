import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect root ("/") to the homepage in (main)
  redirect("/home");
}
