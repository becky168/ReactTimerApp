var expect = require("expect");

// describe (moduleName, testDetails)：用來描述 User Story 所需要測試的 task。
// 只是讓測試結果變得更容易閱讀
describe("App", () => {
    // it (info, function)：一個 it 對應一個 test case，用 info 描述所測試的內容。
    it("should properly run tests", () => {
        // 用 expect library
        expect(1).toBe(1);
    });
});

