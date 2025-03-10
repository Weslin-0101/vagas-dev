import { ServerError, Unauthorized } from "../errors";
import { HttpResponse } from "../protocols/http";

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const unauthorized = (): HttpResponse => ({
    statusCode: 401,
    body: new Unauthorized()
})

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack)
})