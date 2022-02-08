const Manager = require('../lib/manager');

describe('get', () => {
    it("Should return a phone number", () => {
        const manager = new Manager("Mark","01","test@example")
      expect(manager.officeNumber).toBe("(123) 456-7890");
    });
    it('Should return "Manager"', () => {
        const manager = new Manager("Mark","01","test@example")
        expect(manager.position).toBe("Manager");
      });
});
  
    
  