var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var CountdownForm = require("CountdownForm");

describe("CountdownForm", () => {
    it("should exist", () => {
        expect(CountdownForm).toExist();
    });

    it("should call onSetCountdown if valid seconds entered", () => {
        // spy 簡單來講它是一個 function，它會記錄被呼叫的時候的參數、回傳值，用來確認該物件如何被使用。
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "109";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it("should not call onSetCountdown if invalid seconds entered", () => {
        // spy 簡單來講它是一個 function，它會記錄被呼叫的時候的參數、回傳值，用來確認該物件如何被使用。
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "109b";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});