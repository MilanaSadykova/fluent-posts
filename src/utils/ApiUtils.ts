import { ApiResponse } from "@models/ApiResponse";

export class ApiUtils {
    static get = <PayloadType>(url: string): Promise<ApiResponse<PayloadType>> =>
        ApiUtils.makeApiCall(url, 'GET');

    static post = <PayloadType>(url: string): Promise<ApiResponse<PayloadType>> =>
        ApiUtils.makeApiCall(url, 'POST');

    private static makeApiCall = <PayloadType>(url: string, method: string): Promise<ApiResponse<PayloadType>> =>
        fetch(url, { method })
            .then(response => response.json()
                .then(
                    (payload: PayloadType) => ({ ...response, payload })
                )
            );
}