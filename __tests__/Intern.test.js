const Intern = require("../lib/intern")

test("create intern test", () => {
    const intern = new Intern ("");
    expect(intern.name).toBe("");
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("get intern's name test", () => {
    const intern = new Intern("");
    expect(intern.getName()).toHaveProperty("name");
})

test("get intern's id test", () => {
    const intern = new Intern("");
    expect(intern.getId()).toHaveProperty("id")
})

test("get intern's email test", () => {
    const intern = new Intern("");
    expect(intern.getEmail()).toHaveProperty("email");
})

test("get intern's school test", () => {
    const intern = new Intern("");
    expect(intern.getSchool()).toHaveProperty("school");
})