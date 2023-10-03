import {Component} from 'react'

// function Component
// const Welcome = props => {
//   const {name} = props
//   return <h1>Hello, {name}</h1>
// }

// class Component
class Welcome extends Component {
  render() {
    // accessing the props
    const {name} = this.props
    return <h1>Hello, {name}</h1>
  }
}

export default Welcome
