export interface CommentObject {
  _id: string;
  name: string;
  comment: string;
}

export interface CommentResponse {
  results: CommentObject[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
