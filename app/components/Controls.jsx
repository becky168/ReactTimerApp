var React = require("react");

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        };
    },
    render: function () {
        var {countdownStatus} = this.props;
        // You can't use conditional statement in jsx code
        // If you want to conditionally render jsx, you need to define a new function
        // than have the function return the code you like to run
        // and call the function inside in return statement
        var renderStartStopButton = () => {
            if (countdownStatus === "started") {
                return <button className="button secondary" onClick={this.onStatusChange("paused")}>Pause</button>;
            } else if (countdownStatus === "paused") {
                return <button className="button primary" onClick={this.onStatusChange("started")}>Start</button>;
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;