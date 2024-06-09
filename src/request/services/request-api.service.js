import http from "@/shared/services/http-common.js";


export class RequestApiService {

    getAll() {
        return http.get('/request');
    }
    create(requestResource) {
        return http.post('/resquest', requestResource);
    }

    update(id, requestResource) {
        return http.put(`/resquest/${id}`, requestResource);
    }
    delete(id) {
        return http.delete(`/resquest/${id}`);
    }

    getById(id) {
        return http.get(`/resquest/${id}`);
    }

    findByEmployer(employer) {
        return http.get(`/resquest?employer=${employer}`);
    }

}