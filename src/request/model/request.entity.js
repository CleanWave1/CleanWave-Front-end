export class Request {
    constructor(id, employer, ubication, applicationDate, payment, status) {
        this.id = id;
        this.employer = employer;
        this.ubication = ubication;
        this.applicationDate = applicationDate;
        this.payment = payment;
        this.status = status;

    }

    static fromDisplayableRequest(displayableRequest) {
        return new Request(
            displayableRequest.id,
            displayableRequest.employer,
            displayableRequest.ubication,
            displayableRequest.applicationDate,
            displayableRequest.payment,
            displayableRequest.status);
    }
    static toDisplayableRequest(request) {
        return {
            id: request.id,
            employer: request.employer,
            ubication: request.ubication,
            applicationDate: request.applicationDate,
            payment: request.payment,
            status: request.status
        };
    }
}