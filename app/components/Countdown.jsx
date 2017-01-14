var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");

var Countdown = React.createClass({
    getInitialState: function () {
        return {count: 0};
    },
    handleSetCountdown: function (seconds) {
        // parameter is an important thing that
        // we can maintain our state and
        // interact with CountdownForm component (Child Component)
        this.setState({
            count: seconds
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