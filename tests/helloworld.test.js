describe("hello world module", () => {
    it("has expected greeting", () => {
        const helloworld = require("helloworld");

        expect(helloworld.greeting()).toBe("hello world");
    });
});
