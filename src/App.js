import React from "react"
import Header from "./components/Header/Header"
import IntroSection from "./components/IntroSection/IntroSection"
import Footer from "./components/Footer/Footer"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen : "main"
    };
    this.setScreen = this.setScreen.bind(this);
    this.setScreenRender = this.setScreenRender.bind(this)
  }

  setScreen(screenName) {
    this.setState({
      screen: screenName
    })
  }

  setScreenRender() {
    if (this.state.screen === "main") {
      return (
        <IntroSection />
      )
    }
  }

  render() {
    return (
      <div>
        <Header setScreen={this.setScreen}/>
        {this.setScreenRender()}
        <Footer/>
      </div>
    )
  }
}

export default App
