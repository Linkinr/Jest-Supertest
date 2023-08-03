export function createUserData (randomName, randomEmail, phone, role, randomSource, nambNumber, referral_token)  {
   return {
    name: randomName,
    email: randomEmail,
    phone: phone,
    role: role,
    nambNumber: nambNumber,
    source: randomSource,
    referral_token: referral_token}
}