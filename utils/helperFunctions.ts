
import { supabase } from "./supabase";

    const registerView = async (library_id: string): Promise<void> => {
        const data = await supabase.rpc("views_increment", {
            library_id_text: library_id,
        });
};
export { registerView };