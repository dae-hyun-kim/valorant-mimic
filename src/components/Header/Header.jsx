import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/valorant-logo.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setScreenToMain = this.setScreenToMain.bind(this);
    this.setScreenToGameInfo = this.setScreenToGameInfo.bind(this);
    this.setScreenToAgentsInfo = this.setScreenToAgentsInfo.bind(this)
  }

  setScreenToMain() {
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("main")
  }

  setScreenToGameInfo() {
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("gameInfo")
  }

  setScreenToAgentsInfo() {
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("agentsInfo")
  }

  render() {
    return (
      <header>
        <div className={`d-flex align-items-center justify-content-around ${styles.mainHead}`}>
          <div className="col-6">
            <img src={logo} alt="" className={styles.logo} onClick={this.setScreenToMain}/>
          </div>
          <div className={`col-2 d-flex justify-content-around ${styles.headerFont}`}>
            <div onClick={this.setScreenToGameInfo} className={`d-flex justify-content-center align-items-center ${styles.headerNav}`}>
              <p>GAME</p>
            </div>
            <div onClick={this.setScreenToAgentsInfo} className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>AGENTS</p>
            </div>
            <div className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>ROLES</p>
            </div>
            <div className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>MAPS</p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
