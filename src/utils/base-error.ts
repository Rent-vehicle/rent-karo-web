import { AxiosError } from "axios";
import { StatusCodes, StatusMessage } from "@/constant/status-codes";
export enum ErrorCode {
  UNIDENTIFIED,
}

export type ErrorStatusCode = ErrorCode | StatusCodes;

const DEFAULT_ERROR = "An unexpected error occurred. Please try again";

export class BaseError {
  constructor(
    readonly message: string = DEFAULT_ERROR,
    readonly status: ErrorStatusCode = ErrorCode.UNIDENTIFIED,
    readonly detail: Record<any, any> | string | Array<any> | null = null
  ) {}

  static fromJSON(axiosError: AxiosError<any>): BaseError {
    if (axiosError.code === "ECONNABORTED") {
      return new BaseError(`Request Timeout (${axiosError.message})`);
    }

    if (!axiosError.response) {
      return new BaseError(
        "Unable to connect to server. Please check your internet connection try again."
      );
    }

    const { status, data } = axiosError.response;
    let message: string = StatusMessage[status as StatusCodes] ?? DEFAULT_ERROR;
    if (data) {
      // validation errors
      if (data?.errors) {
        message = data?.errors[0].message;
      } else if (data?.message) {
        message = data?.message;
      }
    }
    return new BaseError(message, status, data || null);
  }
}
