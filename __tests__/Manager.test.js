const Manager = require("../lib/manager")

test("create manager test", () => {
    const manager = new Manager ("");
    expect(manager.name).toBe("");
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));

});

test("get manager's name test", () => {
    const manager = new Manager("");
    expect(manager.getName()).toHaveProperty("name");
})

test("get manager's id test", () => {
    const manager = new Manager("");
    expect(manager.getId()).toHaveProperty("id")
})

test("get manager's email test", () => {
    const manager = new Manager("");
    expect(manager.getEmail()).toHaveProperty("email");
})

test("get manager's office number test", () => {
    const manager = new Manager("");
    expect(manager.getOffice()).toHaveProperty("office");
})