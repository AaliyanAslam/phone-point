import { useState, useEffect } from "react";

export function useMobiles() {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/mobiles");
        if (!res.ok) throw new Error("Failed to fetch mobiles");

        const data = await res.json();
        setMobiles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMobiles();
  }, []);

  return { mobiles, loading, error };
}
