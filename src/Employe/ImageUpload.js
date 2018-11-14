import React , { Component } from 'react';

class ImageUpload extends Component{
  constructor(props){
    super(props);

    this.state = {
      secondsRemaining:0
      }
  }

  tick = () => {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  componentDidMount = () => {
    this.setState({ secondsRemaining: 30 });
    this.interval = setInterval(this.tick, 1000);
  }

  render(){
    return(
      <div>
        <p>Prabal</p>
        {this.state.secondsRemaining}
      </div>
    )
  }
  



}

export default ImageUpload;



