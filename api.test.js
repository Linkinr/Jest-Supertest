
import supertest from "supertest";
import { getApp } from "./until/getApp";
import { postSignIn } from "./Auth/authEndPoin";
import randomEmail from "./until/DefaultResources"
const request = supertest(getApp())





async function getSession(email, pass) {
  const getAdminSession = await postSignIn(email, pass);
  
  expect(getAdminSession.status).toEqual(200);
  return getAdminSession;
}

describe('API Test', () => {
  it.skip('should return status code 200', async () => {
    const response = await request.post('/api/dev/cache/clear');
    expect(response.status).toBe(204);
  });

  describe.skip('Login', () => {
    it('Login owner', async () => {
      const response = await getSession("kovalchukruslanlink@gmail.com", "qwertyu123")

      expect(response.status).toBe(200);
      expect(response.body.data.attributes.profile.role).toBe("owner")

    })

    it("Login lender", async () => {
      const response = await getSession("alt.eq-51jd9j1@yopmail.com", "53fd5b82")

      expect(response.status).toBe(200);
      expect(response.body.data.attributes.profile.role).toBe("lender")
    })

    it("Login agent", async () => {
      const response = await getSession("yatrogefrefrou-3909@yopmail.com", "KGJgfgs454@lrgD")

      expect(response.status).toBe(200);
      expect(response.body.data.attributes.profile.role).toBe("agent")
    })

    it("Login sales", async () => {
      const response = await getSession("kovalchukruslanlink+2@gmail.com", "qwertyuiop1234567")

      expect(response.status).toBe(200);
      expect(response.body.data.attributes.profile.role).toBe("sales")
    })

    it("Login marketing", async () => {
      const response = await getSession("kovalchukruslanlink+3@gmail.com", "qwertyuiop1234567")

      expect(response.status).toBe(200);
      expect(response.body.data.attributes.profile.role).toBe("marketing")
    })

    it("Login customer_success", async () => {
      const response = await getSession("kovalchukruslanlink+4@gmail.com", "qwertyuiop1234567")

      expect(response.status).toBe(200);
      expect(response.body.data.attributes.profile.role).toBe("customer_success")
    })
  })

  describe("Register",() => {
    // it('efe', () => {
    //   console.log(randomEmail)
    // })
  })


});
