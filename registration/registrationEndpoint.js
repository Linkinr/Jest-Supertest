import supertest from "supertest";
import { getApp } from "../until/getApp";


const request = supertest(getApp());
export const postUserRegistration = async (body) =>
    await request
        .post("/api/v2/registrations")
        .type('form')
        .set('Accept', 'application/json')
        .set('Content-Type', "application/x-www-form-urlencoded")
        .send(body)
