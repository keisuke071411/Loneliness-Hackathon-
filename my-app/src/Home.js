import { withRouter } from 'react-router';

class Home extends React.Component {
  handleToAboutPage = () => {
    this.props.history.push('/about')
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleToAboutPage}>
          aboutページへ遷移する
        </Button>
      </div>
    )
  }
}

ReactDOM.render(
    <Home/>,
    document.getElementById('root')
);

export default withRouter(Home)