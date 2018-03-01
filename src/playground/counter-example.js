/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-27 20:43:38 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-02-28 21:10:27
 */
// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, document.getElementById('app'));
// };

// renderCounterApp();
//////////////////////////////////////////////////////////////////////////////////////////////

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    try {
      console.log('Fetching Data');
      const json = localStorage.getItem('count');
      const count = parseInt(json);
      if (count) {
        this.setState(() => ({ count: count }));
      }
    } catch (error) {
      //Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Saving Data');
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }

  addOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  minusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  reset() {
    this.setState(prevState => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>Value +1</button>
        <button onClick={this.minusOne}>Value -1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

//Rendering
ReactDOM.render(<Counter />, document.getElementById('app'));
