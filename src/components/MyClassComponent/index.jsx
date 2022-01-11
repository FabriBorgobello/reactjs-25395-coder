import { Component } from "react";

class MyClassComponent extends Component {
  render() {
    return (
      <div>
        Hola desde el componente de clase, mi nombre es:
        {this.props.name}
      </div>
    );
  }
}

export default MyClassComponent;
