import React, { Component } from 'react'
import './App.css';
import './components/Navbar/Navbar.css'
import { Route } from "react-router-dom"
import Home from "./components/Home/Home"
import AboutMe from "./components/AboutMe/AboutMe"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import ShowNav from "./components/Navbar/ShowNav"
import Footer from "./components/Footer/Footer"

class App extends Component {
  constructor() {
    super()

    this.state = {
      revealNav: false,
      changeShape: false,
    }
    this.toggleRevealNav = this.toggleRevealNav.bind(this)
  }

  toggleRevealNav() {
    this.setState((prevState) => {
      return {
        revealNav: !prevState.revealNav,
        changeShape: !prevState.changeShape
      }
    })
  }

  render() {
    const { revealNav, changeShape } = this.state
    const shape = changeShape ? "x" : "hamburger"

    return (
      <div className="App">
        <ShowNav reveal={revealNav} />
        <div className={shape} onClick={this.toggleRevealNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={!revealNav ? "rest" : "rest shift-page"}>
          <main>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about-me" component={AboutMe}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
