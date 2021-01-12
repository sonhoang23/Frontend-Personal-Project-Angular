export class ApiResult<T> {
  IsSuccessed: boolean;
  Message: string;
  StatusCode: number;
  ResultObj: T;
}
