import { Utils } from "../pages/utils"

export default {
    testUser: {
        Email: "test@test.com",
        Password: "123456"
    },
    validUser: {
        Email: `test${Utils.getRandomNumber()}@mail.com`,
        Password: `Password${Utils.getRandomNumber()}`,
    },
    invalidUser: {
        Email: "bad email",
        Password: "bad password",
    },



};