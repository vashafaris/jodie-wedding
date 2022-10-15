import useSWR from 'swr';
import { CommentResponse } from 'types/comment';

import fetch from '~/lib/fetch';

export function useGetComments() {
  const url = 'api/get-comment';

  const { data, error } = useSWR<CommentResponse, unknown>(() => url, fetch);

  return {
    comments: data?.results,
    info: data?.info,
    isLoading: !!data && !!error,
    isError: error,
  } as const;
}
