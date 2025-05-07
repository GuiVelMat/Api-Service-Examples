import { apiService } from "./api/api.service";

export class TestService {
    async getAllTest() {
        return await apiService('/test', 'GET');
    }

    async getTestById(id: string) {
        return await apiService(`/test/${id}`, 'GET');
    }

    async createTest(data: any) { // Change 'any' to the required model type
        return await apiService('/test', 'POST', data);
    }

    async updateTest(id: string, data: any) { // Change 'any' to the required model type
        return await apiService(`/test/${id}`, 'PUT', data);
    }

    async deleteTest(id: string) {
        return await apiService(`/test/${id}`, 'DELETE');
    }

    async getBlobFile(id: string) { // Example with all the 4 parameters (URL, method, body, config)
        const blob = await apiService<Blob>(`/test/${id}/file`, 'GET', null, { responseType: 'blob' });
        const fileURL = URL.createObjectURL(blob); // Convert blob to URL

        return fileURL; // Return the file URL to reduce the size of the data when using through components;
    }
}