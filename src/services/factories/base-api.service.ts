import ENV_CONFIG from "@/constant/env-config";
import { localStorageService } from "@/services/factories/local-storage.service";
import { BaseError } from "@/utils/base-error";
import Axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  CancelToken,
  CancelTokenSource,
  RawAxiosRequestHeaders,
} from "axios";

export interface RequestConfig extends AxiosRequestConfig {
  requestId?: string;
  redirectIfUnauthorized?: boolean;
}

export type QueryParams = Record<string, string | string[]>;

const BASE_URL = ENV_CONFIG.BACKEND_URL as string;

export class BaseApiService {
  private static instance: BaseApiService;
  private requestMap = new Map<string, CancelTokenSource>();

  public static getInstance(): BaseApiService {
    if (!this.instance) {
      this.instance = new BaseApiService();
    }
    return this.instance;
  }

  public async get<T>(
    url: string,
    opts?: {
      params?: QueryParams;
      headers?: AxiosRequestHeaders;
      extras?: { requestId?: string; useAuth?: boolean };
    }
  ): Promise<T> {
    return this.request<T>(
      {
        method: "GET",
        url,
        headers: opts?.headers,
        params: opts?.params,
        requestId: opts?.extras?.requestId,
      },
      opts?.extras?.useAuth
    );
  }

  public async post<T, D = unknown>(
    url: string,
    data?: D,
    opts?: {
      headers?: AxiosRequestHeaders;
      params?: QueryParams;
      extras?: { requestId?: string; useAuth?: boolean };
    }
  ): Promise<T> {
    return this.request<T>(
      {
        method: "POST",
        url,
        data,
        headers: opts?.headers,
        params: opts?.params,
        requestId: opts?.extras?.requestId,
      },
      opts?.extras?.useAuth
    );
  }

  public async put<T, D = unknown>(
    url: string,
    data?: D,
    opts?: {
      headers?: AxiosRequestHeaders;
      params?: QueryParams;
      extras?: { requestId?: string; useAuth?: boolean };
    }
  ): Promise<T> {
    return this.request<T>(
      {
        method: "PUT",
        url,
        data,
        headers: opts?.headers,
        params: opts?.params,
        requestId: opts?.extras?.requestId,
      },
      opts?.extras?.useAuth
    );
  }

  public async delete<T>(
    url: string,
    opts?: {
      headers?: AxiosRequestHeaders;
      params?: QueryParams;
      data?: unknown;
      extras?: { requestId?: string; useAuth?: boolean };
    }
  ): Promise<T> {
    return this.request<T>(
      {
        method: "DELETE",
        url,
        headers: opts?.headers,
        params: opts?.params,
        data: opts?.data,
        requestId: opts?.extras?.requestId,
      },
      opts?.extras?.useAuth
    );
  }

  private async request<T>(
    config: RequestConfig,
    useAuth?: boolean
  ): Promise<T> {
    const cancelToken = this.addToRequestMap(config.requestId);
    try {
      const response = await Axios.request<T>({
        baseURL: BASE_URL,
        cancelToken,
        withCredentials: true,
        ...config,
        headers: await this.generateHeaders(config.headers, useAuth),
      });

      this.removeFromRequestMap(config.requestId);

      return response.data;
    } catch (error) {
      throw BaseError.fromJSON(error as AxiosError);
    }
  }

  private async generateHeaders(
    headers?: RawAxiosRequestHeaders,
    useAuth?: boolean
  ) {
    const defaultHeaders: Record<string, string> = {};
    if (useAuth) {
      defaultHeaders.Authorization = `Bearer ${localStorageService.getAuthToken()}`;
    }
    return { ...defaultHeaders, ...headers };
  }

  private addToRequestMap(requestId?: string): CancelToken | undefined {
    if (!requestId) return undefined;
    const source = Axios.CancelToken.source();
    this.requestMap.set(requestId, source);
    return source.token;
  }

  private removeFromRequestMap(requestId?: string) {
    if (requestId) this.requestMap.delete(requestId);
  }
}

export const baseApiService = BaseApiService.getInstance();
