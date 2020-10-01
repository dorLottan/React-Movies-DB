import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useActorFetch = actorId => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}person/${actorId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditEndPoint = `${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}`;
      const creditResult = await (await fetch(creditEndPoint)).json();
      const data = { ...result, knownfor: creditResult };
      setState(data);
      console.log(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [actorId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, loading, error];
};
