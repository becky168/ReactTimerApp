var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Countdown = require("Countdown");

describe("Countdown", () => {
    it("should exist", () => {
        expect(Countdown).toExist();
    });

    describe("handleSetCountdown", () => {
        it("should set state to started and countdown", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            // async test
            // by default, mocha test not support async test
            // unless pass the "done" parameter
            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                // 在 mocha 裡，測 async 程式是很簡單的事，訣竅在於多個 done() 的函式呼叫。
                // 如果你要驗證的結果會在某個 callback 裡被傳入，
                // 在使用 it() 呼叫時，it() 的 callback 會帶給你一個參數，
                // 這是一個 function 的 reference ，通常我們會把它命名為 done，
                // 你必須在驗證完結果再呼叫 done()，如此一來 mocha 才知道這個 test case 已經執行結束。
                done();
            }, 1001);
        });

        it("should never set count less than zero", (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(1);

            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
});