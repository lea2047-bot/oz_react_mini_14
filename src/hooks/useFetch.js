import { useEffect, useState } from 'react';

export default function useFetch(asyncFunc, deps = []) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const result = await asyncFunc();
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(String(err));
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, deps);

  return { data, error, loading };
}
