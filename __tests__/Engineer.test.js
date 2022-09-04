// test to make sure engineer function works
const Engineer = require("../lib/Engineer")

test("create engineer test", () => {
    const engineer = new Engineer ("");
    expect(engineer.name).toBe("");
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.username).toEqual(expect.any(String));

});

test("get engineer's name test", () => {
    const engineer = new Engineer("");
    expect(engineer.getName()).toHaveProperty("name");
})

test("get engineer's id test", () => {
    const engineer = new Engineer("");
    expect(engineer.getId()).toHaveProperty("id")
})

test("get engineer's email test", () => {
    const engineer = new Engineer("");
    expect(engineer.getEmail()).toHaveProperty("email");
})

test("get engineer's github username test", () => {
    const engineer = new Engineer("");
    expect(engineer.getUsername()).toHaveProperty("username");
})