const Intern = require('../lib/intern');

describe('getGithub', () => {
    it("Should store user input to appropriate value", () => {
        const intern = new Intern("Mark","01","test@example","testUniversity")
      expect(intern.getSchool()).toBe("testUniversity");
    });
});
  
    describe('Intern class', () => {
      it('Should return "Intern"', () => {
        const intern = new Intern("Mark","01","test@example","testUniversity")
        expect(intern.position).toBe("Intern");
      });
    });
  