const UserService = require("./../../app/services/UserService")

describe("Prueba de clase UserService", () => {
    test("Preba 1", () => {
        const user = UserService.create(1, "oscarmtz", "Oscar")
        expect(user.username).toBe("oscarmtz")
        expect(user.name).toBe("Oscar")
        expect(user.id).toBe(1)
        expect(user.username).not.toBeUndefined();
    });

    test("Preba 2", () => {
        const user = UserService.create(1, "oscarmtz", "Oscar")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("oscarmtz")
        expect(userInfoInList[2]).toBe("Oscar")
        expect(userInfoInList[3]).toBe("Sin bio")
    });

    test("Preba 3", () => {
        const user = UserService.create(1, "oscarmtz", "Oscar")
        UserService.updateUserUsername(user, "oscarmtzglez")
        expect(user.username).toBe("oscarmtzglez")
    });

    test("Preba 4", () => {
        const user1 = UserService.create(1, "oscarmtz1", "Oscar")
        const user2 = UserService.create(1, "oscarmtz2", "Oscar")
        const user3 = UserService.create(1, "oscarmtz3", "Oscar")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("oscarmtz1")
        expect(usernames).toContain("oscarmtz2")
        expect(usernames).toContain("oscarmtz3")
    });
})