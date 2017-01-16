var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");
var Controls = require("Controls");

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: "stopped"
        };
    },
    // Called when (after) state or props is updated
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({count: 0});
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    // // Fired before state or prop is updated
    // componentWillUpdate: function (nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // },
    // // 當元件內部的結構處理完畢準備寫入 DOM 之前觸發。
    // // get fired when the component first get mounted
    // // called before component show to the screen 
    // // it means that we can't access refs or dom
    // componentWillMount: function () {
    //     console.log("componentWillMount");
    // },
    // // 當元件被寫入 DOM 之後觸發。當初始化需要操作 DOM 元素就可以用這個方法。
    // // get fired after everything is render in the dom
    // // can access any refs if you what to make any updating
    // componentDidMount: function () {
    //     console.log("componentDidMount");
    // },
    // 當元件準備要被移除或破壞時觸發。(fired before the component get removed from DOM)
    // Visually removed from the browser
    componentWillUnmount: function () {
        console.log("componentWillUnmount");
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({countdownStatus: "stopped"});
            }
        }, 1000);
    },
    handleSetCountdown: function (seconds) {
        // parameter is an important thing that
        // we can maintain our state and
        // interact with CountdownForm component (Child Component)
        this.setState({
            count: seconds,
            countdownStatus: "started"
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function () {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== "stopped") {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
            }
        };
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;