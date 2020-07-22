import { ToyReact, Component } from "./ToyReact";
class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "x" })}>
        {this.state.value || ""}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
const a = <Board />;

ToyReact.render(a, document.body);


// import { ToyReact, Component } from "./toyReact.js";

// class MyComponent extends Component {
//   render() {
//     return (
//       <div>
//         <div>ssss</div>
//         <div>111</div>
//         <div>222</div>
//         {true}
//         {this.children}
//       </div>
//     );
//   }
// }

// let a = (
//   <MyComponent>
//     <div>ssss inner</div>
//   </MyComponent>
// );

// ToyReact.render(a, document.body);
