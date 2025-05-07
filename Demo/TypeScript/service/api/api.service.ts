import { AxiosRequestConfig } from 'axios';
import api from './api';

export const apiService = async <T = any>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: any,
    options?: AxiosRequestConfig,
): Promise<T> => {
    const response = await api({
        url,
        method,
        data: body,
        ...options,
    })

    return response.data
}