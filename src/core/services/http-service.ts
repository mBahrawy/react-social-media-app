/* eslint-disable class-methods-use-this */
import http from "@/core/interceptors/interceptor";
import { AxiosResponse } from "axios";
import useLoader from "../hooks/userLoader";

class HttpService {
  public postRequest = async <T>(url: string, data: unknown): Promise<AxiosResponse<unknown, unknown> | T> => {
    const { enableLoader, hideLoader } = useLoader();
    enableLoader();
    return http.post(url, data).then(
      (respose) => {
        hideLoader();
        return respose.data;
      },
      (error: Error) => {
        hideLoader();
        return Promise.reject(error);
      }
    );
  };

  public putRequest = async <T>(url: string, data: unknown): Promise<AxiosResponse<unknown, unknown> | T> => {
    const { enableLoader, hideLoader } = useLoader();
    enableLoader();
    return http.put(url, data).then(
      (respose) => {
        hideLoader();

        return respose.data;
      },
      (error: Error) => {
        hideLoader();

        return Promise.reject(error);
      }
    );
  };

  public getRequest = async <T>(url: string): Promise<AxiosResponse<unknown, unknown> | T> => {
    const { enableLoader, hideLoader } = useLoader();
    enableLoader();
    return http.get(url).then(
      (respose) => {
        hideLoader();

        return respose.data;
      },
      (error: Error) => {
        hideLoader();

        return Promise.reject(error);
      }
    );
  };

  public deleteRequest = async <T>(url: string): Promise<AxiosResponse<unknown, unknown> | T> => {
    const { enableLoader, hideLoader } = useLoader();
    enableLoader();
    return http.delete(url).then(
      (respose) => {
        hideLoader();

        return respose.data;
      },
      (error: Error) => {
        hideLoader();

        return Promise.reject(error);
      }
    );
  };
}

export default HttpService;
