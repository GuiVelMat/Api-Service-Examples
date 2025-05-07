import { apiService } from "../../TypeScript/api.service";


export class TestService {
    async getAllTest() {
        return await apiService('/test', 'GET');
    }

    async getTestById(id: string) {
        return await apiService(`/test/${id}`, 'GET');
    }

    async createTest(data: any) { //cambiar any por el modelo que se necesite
        return await apiService('/test', 'POST', data);
    }

    async updateTest(id: string, data: any) { //cambiar any por el modelo que se necesite
        return await apiService(`/test/${id}`, 'PUT', data);
    }

    async deleteTest(id: string) {
        return await apiService(`/test/${id}`, 'DELETE');
    }
}