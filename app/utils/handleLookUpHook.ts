// src/useWhoisLookup.ts

import { useState, useCallback } from 'react';
import { fetchWhoisData, WhoisResponse } from './api';

export const useWhoisLookup = (apiKey: string) => {
  const [data, setData] = useState<WhoisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const lookup = useCallback(async (domain: string) => {
    setIsLoading(true);
    try {
      const result = await fetchWhoisData(domain, apiKey);

      console.log(result)
      if (result.dataError === "MISSING_WHOIS_DATA") {
        setError('No data found for this domain');
        setData(null);
        return;
      }
      
      setData(result);
      setError(null);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch Whois data. Please try again.');
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);

  return { data, error, isLoading, lookup };
};
