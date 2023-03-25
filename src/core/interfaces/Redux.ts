import { PostsSliceState } from "./Post";

export interface AsyncDispatchResponse {
  type: string;
  payload: unknown;
  meta: Meta;
}

export interface Meta {
  arg: FormData;
  requestId: string;
  requestStatus: string;
}

export interface AppState {
  posts: PostsSliceState;
}

export type FetchError = {
  message: string;
};
