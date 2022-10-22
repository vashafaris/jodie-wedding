export interface CommentObject {
  _id: string;
  name: string;
  comment: string;
}

export interface CommentResponse {
  count: number;
  results: CommentObject[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
