import React, { component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';
import './App.css';

(() => {

  function Counter(props) {
      return (
          <li style={{background:props.counter.color}}
          onClick={() => props.countUp(props.counter)}>
              {props.counter.id}:{props.counter.count}
          </li>
      );
  }

  function CounterList(props) {
      const counters = props.counters.map(counter => {
          return (
              <Counter
              counter={counter}
              key={counter.id}
              countUp={props.countUp}
              />
          );
      });

      return (
          <ul>
              {counters}
          </ul>
      );
  }
    function numBlanch (totalNum) {
        if (totalNum <= 10) {
            console.log('hello');
        } else if (totalNum <= 20) {
            console.log('hey');
        } else if (totalNum <= 30) {
            console.log('30');
        } else {
            console.log('no');
        }
    }

  class App extends React.Component {
      constructor() {
          super();
          this.state = {
              counters: [
                  {id: 'A', count: 0, color: 'tomato'}
              ],
              total: 0
          };
          this.countUp = this.countUp.bind(this);
      }

      countUp(counter) {
          this.setState(prevState => {
              const counters = prevState.counters.map(counter => {
                  return {id: counter.id, count: counter.count, color: counter.color};
              });

              const pos = counters.map(counter => {
                  return counter.id;
              }).indexOf(counter.id);

              counters[pos].count ++;

              return {
                  counters: counters,
                  total: prevState.total + 1
              };
          });
      }

      render() {
          return (
              <div className="container">
                  <CounterList
                      counters={this.state.counters}
                      countUp={this.countUp}    
                  />
                  <button onClick={() => numBlanch(this.state.total)}>
                      TOTAL KILL : {this.state.total}
                  </button>
              </div>
          );
      }
  }

  ReactDOM.render(
      <App/>,
      document.getElementById('root')
  );
}) ();