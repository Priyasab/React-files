import React from "react";

class UnmountingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.removeHeader = this.removeHeader.bind(this);
  }
  removeHeader() {
    this.setState({
      show: false,
    });
  }
  render() {
    if (this.state.show) {
      var header = <HeaderComponent />;
    }
    return (
      <div className="unmounting">
        {header}
        <button onClick={this.removeHeader}>Remove Header</button>
      </div>
    );
  }
}
class HeaderComponent extends React.Component {
  componentWillUnmount() {
    alert("Header will remove");
  }
  render() {
    return <h3>Header</h3>;
  }
}
export default UnmountingComponent;
