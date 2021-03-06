import React from "react";
import styles from "./IntroSection.module.css";
import logo from '../../assets/valorant.png'

class IntroSection extends React.Component {
  constructor(props) {
    super(props);
    this.setToGameInfoScreen = this.setToGameInfoScreen.bind(this)
  }

  setToGameInfoScreen() {
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("gameInfo")
  }

  render() {
    return (
      <div className={`d-flex justify-content-center align-items-center ${styles.introSectionBackground}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" className={`${styles.slideIn} ${styles.valorantLogo}`}/>
          <div className="d-flex justify-content-center">
            <div className={`d-flex justify-content-center align-items-center ${styles.introBox} ${styles.slideIn}`}>
              <div className={`${styles.innerIntroBox}`}>
                <div>
                  <h5 className={`mt-3 text-center ${styles.introBoxFont}`}>A 5v5 character-based <br></br>tactical shooter by Riot Games</h5>
                  <div className="d-flex justify-content-center">
                    <div onClick={this.setToGameInfoScreen} className={`mt-4 text-center d-flex justify-content-center align-items-center ${styles.learnMoreButton} ${styles.font} ${styles.fourth}`}>Learn More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroSection;
