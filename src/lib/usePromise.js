import { useState, useEffect } from "react";

export default function usePromise(promiseCreater, deps) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function request() {
      try {
        setLoading(true);
        const resp = await promiseCreater();
        setResponse(resp.data);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, response, error];
}
