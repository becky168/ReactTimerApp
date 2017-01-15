var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: "stopped"
        };
    },
    // Called when state or props is updated
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case "started":
                    this.startTimer();
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
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
    render: function () {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown} />
            </div>
        );
    }
});

module.exports = Countdown;