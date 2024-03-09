export interface IApiResponse<TResponse> {
  success: boolean;
  code: number;
  body?: TResponse;
}
