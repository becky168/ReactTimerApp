var React = require("react");
// 因為 Mocha 運行在 Node 環境中，所以你不會存取到 DOM。
// 所以我們要使用 JSDOM 來模擬真實 DOM 環境。
// 同時我在這邊引入 react-dom，這樣我們就可以使用 findDOMNode 來選取元素。
// 事實上，findDOMNode 方法的最大優勢是提供比 TestUtils 更好的 CSS 選擇器，方便開發者選擇元素。
var ReactDom = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Clock = require("Clock");

describe("Clock", () => {
    it("should exist", () => {
        expect(Clock).toExist();
    })

    describe("render", () => {
        it("should render clock to output", () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
            var $el = $(ReactDom.findDOMNode(clock));
            var actualText = $el.find(".clock-text").text();

            expect(actualText).toBe("01:02");
        });
    });

    // when you test an individual method that have more than one test
    // it always a good idea to use "describe"
    describe("formatSeconds", () => {
        it("should format seconds", () => {
            // renderIntoDocument(Component): 輸出一個元件到 document 獨立的 DOM 節點(div)去。
            // 由於在測試時，元件並沒有實際 render 到 DOM 上，
            // 我們必須透過 renderIntoDocument 來將元件 render 到一個虛擬的 DOM 上。
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = "10:15";
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it("should format seconds when min/sec are less than 10", () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = "01:01";
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});