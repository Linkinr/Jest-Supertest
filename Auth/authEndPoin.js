import supertest from "supertest";
import { getApp } from "../until/getApp";
import qs from "qs";

const request = supertest(getApp())



const credentials = (email, pass,) => qs.stringify({
    'api_v2_user[email]': email,
    'api_v2_user[password]': pass
})

export const postSignIn = async (email, pass) =>
    await request
        .post("/api/v2/auth/sign_in")
        .set('Content-Type', "application/x-www-form-urlencoded")
        .set('Accept', 'application/json')
        .send(credentials(email, pass))