const Engineer = require('../lib/engineer');

describe('getGithub', () => {
    it("Should store user input to appropriate value", () => {
        const engineer = new Engineer("Mark","01","test@example","example.github")
      expect(engineer.getGithub()).toBe("example.github");
    });
});
  
    describe('Engineer class', () => {
      it('Should return first parameter', () => {
        const employee = new Engineer("Mark","01","test@example","example.github")
        expect(employee.position).toBe("Engineer");
      });
    });
  
    