import React from "react";
/// This class use for entering name of player 
///via 'handleChange' we can save input value to the state (an object for saving temporary data)
// via 'handleClick' we can grab the information of player inside the state and send it to the next component 
class Login extends React.Component {
  state = {
    player: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);
    let player = event.target.id;
    this.setState({ [player]: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { player } = this.state;
    this.props.names(player);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="screen">
          <form>
            <div className="form-group">
              <label>Player Name:</label>
              <input
                type="name"
                id="player"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>

            <button onClick={this.handleClick} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
