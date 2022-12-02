import React, { Component } from "react";

class MountingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     color: props.favColor,
  //   };
  // }

  render() {
    return (
      <div className="mounting">
        <div>My favourite color is {this.state.color}</div>
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "yellow",
      });
    }, 5000);
  }
}
export default MountingComponent;
