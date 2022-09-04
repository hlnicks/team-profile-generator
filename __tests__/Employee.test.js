// test to make sure employee function works
const Employee = require("../lib/Employee");

test("create employee test", () => {
    const employee = new Employee ("");
    expect(employee.name).toBe("");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("get employee's name test", () => {
    const employee = new Employee("");
    expect(employee.getName()).toHaveProperty("name");
})

test("get employee's id test", () => {
    const employee = new Employee("");
    expect(employee.getId()).toHaveProperty("id")
})

test("get employee's email test", () => {
    const employee = new Employee("");
    expect(employee.getEmail()).toHaveProperty("email");
})

test("get employee's position test", () => {
    const employee = new Employee("");
    expect(employee.getPosition()).toHaveProperty("position");
})