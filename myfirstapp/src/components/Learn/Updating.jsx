import React from "react";
import "../../Bootstrap.css";
class UpdatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({
      color: "Red",
    });
  }
  shouldComponentUpdate() {
    return true;
  }
  // static getDerivedStateFromProps(props, state) {
  // return {
  // color: props.favColor,
  //};
  //}

  render() {
    return (
      <div className="updating">
        <div>My favourite color is {this.state.color}</div>
        <button onClick={this.changeColor}>change</button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "The prevoius state color was  " + prevState.color;
    return null;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The current state color is  " + this.state.color;
  }
}
export default UpdatingComponent;
