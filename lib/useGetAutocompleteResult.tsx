import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

function useGetAutocompleteResult(search: string) {
  const [data, setData] = useState<Suggestions[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    (async function fetchData() {
      try {
        if (search.length <= 0) {
          setData([]);
          setIsLoading(false);
          return;
        }
        const { data, error } = await supabase
          .from("apps_script_libraries")
          .select("library_id, description, library_name, author")
          .or(`description.ilike.%${search}%, library_name.ilike.%${search}%`)
          // .or(`description.ilike.%${search}%`)
          .limit(10);
        if (error) {
          throw new Error("Network response was not ok");
        }
        const newData = (await data) || [];

        if (!ignore) {
          setData(newData);
          setIsLoading(false);
        }
      } catch (err) {        
        setError(error);
        setIsLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [search,error]);

  return { data, isLoading, error };
}

export default useGetAutocompleteResult;
