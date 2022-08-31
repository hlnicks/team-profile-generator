const Employee = require("./lib/Employee");

test("create employee", () => {
    const employee = new Employee ("Hannah");

    expect(exployee.name).toBe("Hannah");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

// test for name, id, email, role