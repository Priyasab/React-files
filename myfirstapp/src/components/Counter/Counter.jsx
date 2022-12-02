import React from "react";
import App from "../../App";
import "../Counter/Counter.css";
import "../../Bootstrap.css";
class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countAll: 0,
    };
    this.incrementAll = this.incrementAll.bind(this);
    this.decrementAll = this.decrementAll.bind(this);
    this.reset = this.reset.bind(this);
  }
  incrementAll(value) {
    this.setState({
      countAll: this.state.countAll + value,
    });
  }
  decrementAll(value) {
    this.setState({
      countAll: this.state.countAll - value,
    });
  }
  reset() {
    this.setState({
      countAll: (this.state.countAll = 0),
    });
  }
  render() {
    return (
      <div className="counterComponent">
        <Counter
          inc={1}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={5}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={10}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <div className="counter">{this.state.countAll}</div>
        <button
          className="incButton btn btn-info btn-lg"
          style={{ backgroundColor: "orange" }}
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div>
        <button
          className="incButton btn btn-success btn-lg"
          onClick={this.increment}
        >
          +{this.props.inc}
        </button>
        <button
          className="incButton btn btn-primary btn-lg"
          onClick={this.decrement}
        >
          -{this.props.inc}
        </button>
        {/* <span style={{ fontSize: "25px" }}>{this.state.count}</span>*/}
      </div>
    );
  }
  increment() {
    this.setState({
      count: this.state.count + this.props.inc,
    });
    this.props.incrementAll(this.props.inc);
  }
  decrement() {
    this.setState({
      count: this.state.count - this.props.inc,
    });
    this.props.decrementAll(this.props.inc);
  }
}
Counter.defaultProps = {
  inc: 1,
};
export default CounterComponent;
