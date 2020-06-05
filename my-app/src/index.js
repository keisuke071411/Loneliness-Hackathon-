import React, { component } from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
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

  class App extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              counters: [
                  {id: 'オラオラァ', count: 0, color: 'tomato'}
              ],
              total: 0
          };
          this.countUp = this.countUp.bind(this);
          this.onClickButton = this.onClickButton.bind(this);
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

      onClickButton() {
          if (this.state.total < 10){
              this.setState(prevState => {
                  const counters = prevState.counters.map(counter => {
                      return {id: counter.id, count: counter.count, color: counter.color};
                  });
    
                  return {
                      counters: counters,
                      total: prevState.total
                  };
              });
            } else if (this.state.total < 20) {
                this.setState(prevState => {
                    const counters = prevState.counters.map(counter => {
                        return {id: counter.id, count: counter.count, color: 'blue'};
                    });
      
                    return {
                        counters: counters,
                        total: prevState.total
                    };
                });
            } else if (this.state.total < 30) {
            this.setState(prevState => {
                const counters = prevState.counters.map(counter => {
                    return {id: counter.id, count: counter.count, color: 'lime'};
                });
  
                return {
                    counters: counters,
                    total: prevState.total
                };
            });
          } else {
            this.setState(prevState => {
                const counters = prevState.counters.map(counter => {
                    return {id: counter.id, count: counter.count, color: 'orange'};
                });
  
                return {
                    counters: counters,
                    total: prevState.total
                };
            });
          }
      }

      render() {
          return (
              <div className="container">
                  <CounterList
                      counters={this.state.counters}
                      countUp={this.countUp}    
                  />
                  <button onClick={this.onClickButton}>
                    いいや！限界だ押すね！
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