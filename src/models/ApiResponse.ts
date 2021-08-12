export interface ApiResponse<PayloadType> extends Response {
    payload: PayloadType;
}
