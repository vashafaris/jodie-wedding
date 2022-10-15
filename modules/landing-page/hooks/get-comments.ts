import { useCallback } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { CommentResponse } from 'types/comment';

import fetch from '~/lib/fetch';

export function useGetComments() {
  const url = 'api/get-comment';

  const { mutate } = useSWRConfig();

  const { data, error } = useSWR<CommentResponse, unknown>(() => url, fetch);

  const refetch = useCallback(async () => {
    await mutate(url);
  }, [mutate]);

  return {
    comments: data?.results,
    info: data?.info,
    isLoading: !!data && !!error,
    isError: error,
    refetch,
  } as const;
}
