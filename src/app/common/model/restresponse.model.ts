export interface RestResponse<T> {
  status: string;
  error?: string
  data?: T;
}
