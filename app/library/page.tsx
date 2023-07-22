import { supabase } from "@/utils/supabase";
import Test from "../test.md";

// export const revalidate = 1

export default async function Home() {
  return (
    <div className=" min-h-screen">
      <Test />
    </div>
  );
}
