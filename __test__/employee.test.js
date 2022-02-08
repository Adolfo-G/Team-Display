const Employee = require('../lib/employee');

describe('Employee class', () => {
    it("Should store user input to appropriate value", () => {
        const employee = new Employee("Mark","01","test@example")
      expect(employee.id).toBe("01");
    });
});
  
    describe('getName()', () => {
      it('Should return first parameter', () => {
        const employee = new Employee("Mark","01","test@example")
        expect(employee.getName()).toBe("Mark");
      });
    });
  
    describe('getId', () => {
      it('Should return second parameter', () => {
        const employee = new Employee("Mark","01","test@example")
        expect(employee.getId()).toBe('01');
      });
    });

    describe('getEmail', () => {
        it('Should return third parameter', () => {
          const employee = new Employee("Mark","01","test@example")
          expect(employee.getEmail()).toBe('test@example');
        });
      });

      describe('getRole', () => {
        it('Should return "Employee"', () => {
          const employee = new Employee("Mark","01","test@example")
          expect(employee.getRole()).toBe('Employee');
        });
      });