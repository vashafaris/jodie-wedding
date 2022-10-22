import { useCallback, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import qs from 'query-string';
import { CommentResponse } from 'types/comment';

import fetch from '~/lib/fetch';

export interface QueryParams {
  limitParams?: number;
}
export function useGetComments() {
  const [limit, setLimit] = useState<number>(5);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutate } = useSWRConfig();

  const buildURL = useCallback(() => {
    const url = qs.stringifyUrl({
      url: 'api/get-comment',
      query: {
        limit,
      },
    });

    return url;
  }, [limit]);

  const { data, error } = useSWR<CommentResponse, unknown>(() => buildURL(), fetch);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    await mutate(buildURL());

    setIsLoading(false);
  }, [buildURL, mutate]);

  const fetchMore = useCallback(async () => {
    setIsLoading(true);

    const increasedLimit = limit + 5;
    await mutate(buildURL());

    setLimit(increasedLimit);

    setIsLoading(false);
  }, [buildURL, limit, mutate]);

  return {
    comments: data?.results,
    info: data?.info,
    isLoading: (!data && !error) || isLoading,
    isError: error,
    refetch,
    fetchMore,
  } as const;
}
