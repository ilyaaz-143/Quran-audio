import { useEffect, useState } from "react";

export default function Fetch(url) {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const result = await response.json();
      setState(result.chapters);
      setLoading(true);
    }
    getData();
  }, [url]);
  console.log(state);
  return [state, loading];
}
