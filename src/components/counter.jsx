import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-sm-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col col-md-auto">
            <button
              onClick={this.handleIncrement}
              className="m-1 btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={this.handleDecrement}
              className={`m-1 btn btn-secondary btn-sm ${
                this.state.count > 0 ? "" : "bg-light"
              }`}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
