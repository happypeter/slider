import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      move: '',
      index: 1,
    }
  }

  handleNext() {
    if(this.state.index === 4) return
    this.setState({move: this.state.move - this.state.base, index: this.state.index + 1})
  }

  handlePrev() {
    if(this.state.index === 1) return
    this.setState({move: this.state.move + this.state.base, index: this.state.index - 1})
  }

  componentDidMount() {
    const element = this.option
    let margin = window.getComputedStyle(element).marginRight.slice(0, -2)

    this.setState({
      move: -Math.round(element.offsetWidth / 2.0),
      base: element.offsetWidth + parseInt(margin, 10)
    })
  }

  render() {
    let optionList = [1,2,3,4].map((option, i) => {
      return (
        <div key={i} className='option' ref={value => this.option = value}>{i}</div>
      )
    })
    let style = {
       WebkitTransform: `translate3d(${this.state.move}px, 0, 0)`,
       transform: `translate3d(${this.state.move}px, 0, 0)`
    }

    return (
      <div className='options page'>
          <div className='logo-area'>
            <div className='option-list' style={style}>
              {optionList}
            </div>
            <div className='arrow-keys'>
              <div className='arrow' onClick={this.handlePrev.bind(this)}>prev</div>
              <div className='arrow' onClick={this.handleNext.bind(this)}>next</div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
