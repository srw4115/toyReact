import { ToyReact, Component } from "./toyReact.js";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <div>ssss</div>
        <div>111</div>
        <div>222</div>
        {true}
        {this.children}
      </div>
    );
  }
}

let a = (
  <MyComponent>
    <div>ssss inner</div>
  </MyComponent>
);

ToyReact.render(a, document.body);
