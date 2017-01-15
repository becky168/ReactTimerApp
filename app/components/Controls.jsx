var React = require("react");

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function () {
        var {countdownStatus} = this.props;
        // You can't use conditional statement in jsx code
        // If you want to conditionally render jsx, you need to define a new function
        // than have the function return the code you like to run
        // and call the function inside in return statement
        var renderStartStopButton = () => {
            if (countdownStatus === "started") {
                return <button className="button secondary">Pause</button>;
            } else if (countdownStatus === "paused") {
                return <button className="button primary">Start</button>;
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;