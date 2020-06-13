import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import image from '/Users/morookakeisuke/Desktop/develop/practice/React/my-app/src/bbb.png';

(() => {

  function Counter(props) {
      return (
            <li style={{background:props.counter.color}}
            onClick={() => props.countUp(props.counter)}>
                {props.counter.id}
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
          <ul className='aaaaa'>
              {counters}
          </ul>
      );
  }

  class Index extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              counters: [
                  {id: 'いいや！限界だ連打するね！', count: 0, color: 'gray'}
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
                        return {id: 'ACT3! 3 FREEZE!', count: counter.count, color: 'repeating-linear-gradient(-45deg, green, green 10px, #fff 10px, #fff 20px'};
                    });
      
                    return {
                        counters: counters,
                        total: prevState.total
                    };
                });
            } else if (this.state.total < 30 ) {
            this.setState(prevState => {
                const counters = prevState.counters.map(counter => {
                    return {id: 'おれの髪が・・・なんだって！？', count: counter.count, color:  'repeating-linear-gradient(-45deg, skyblue, skyblue 10px, #E6C3C6 10px, #E6C3C6 20px'};
                });
  
                return {
                    counters: counters,
                    total: prevState.total
                };
            });
            } else if (this.state.total < 40 ) {
            this.setState(prevState => {
                const counters = prevState.counters.map(counter => {
                    return {id: 'スタープラチナ・ザ・ワールド!', count: counter.count, color: 'repeating-linear-gradient(-45deg, #3725F5, #3725F5 10px, #fff 10px, #fff 20px'};
                });
  
                return {
                    counters: counters,
                    total: prevState.total
                };
            });
          } else if (this.state.total === 44) {
            this.setState(prevState => {
                const counters = prevState.counters.map(counter => {
                    return {id: "やっ！やったぞッ！発動したぞッ！",  count: counter.count, color: 'repeating-linear-gradient(-45deg, black, black 10px, #fff 10px, #fff 20px)'};
                });
  
                return {
                    counters: counters,
                    total: prevState.total
                };
            });
          }　else {
            this.setState(prevState => {
                const counters = prevState.counters.map(counter => {
                    return {id: "だが断る！", count: counter.count, color: 'repeating-linear-gradient(-45deg, green, green 10px, #C88BD1 10px, #C88BD1 20px'};
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
                  <h1>「スイッチ」を押させるなーーーーッ！</h1>
                  <img src={ image }/>
                  <CounterList
                      counters={this.state.counters}
                      countUp={this.countUp}  
                  />
                  <button onClick={this.onClickButton}>
                    今だっ！
                  </button>
              </div>
          );
      }
  }

  ReactDOM.render(
      <Index/>,
      document.getElementById('root')
  );
}) ();