import sum from "./sum";

describe("test for sum function", () => {
    test("adds 2 + 2 equla to 4", () => {
        expect(sum(2, 2)).toBe(4);
    });

    test("adds 5 + 2 equla to 7", () => {
        expect(sum(5, 2)).toBe(7);
    });
})
