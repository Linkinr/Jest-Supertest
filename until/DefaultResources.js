import {faker} from "@faker-js/faker";

export const randomEmail = faker.internet.email(faker.lorem.word(), faker.lorem.word(), 'test.com');
export const randomName = faker.name.firstName();
export const defaultPhone = "6183057006";
export const agent = 'agent';
export const lender = 'lender';
export const NAMB_NUMBER = 123456;
export const RANDOM_SOURCE = 'viral_c'
// ESM
// import { faker } from '@faker-js/faker';



// export function randomEmail() {
//   return  faker.internet.email()
// }

