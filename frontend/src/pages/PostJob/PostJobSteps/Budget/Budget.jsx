import React from 'react'
import styles from './Budget.module.css'
import Line from '../../../../components/shared/Line/Line'
import PrimaryButton from '../../../../components/shared/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../../../components/shared/SecondaryButton/SecondaryButton'

const Budget = () => {
  return (
      <>
          <div className={`${styles.wrapper} flex`}>
              <div>
                  <div className={styles.head}>
                      <h3>3/4 Budget</h3>
                      <h2>Tell us about your budget</h2>
                  </div>

                  <span>this helps us and your helper know what is your budget</span>
              </div>
              <div className={styles.line}>
                  <Line height="300px" width="2px" backgroundColor="#E2E2E2" ></Line>
              </div>
              <div className={styles.right}>
                  <input type="text" label="Write Job Title" />
                  <input type="text" label="Write Job Title" />

                  <h4>Example Budget</h4>
                  <ul>
                      <li>Min $150</li>
                      <li>Max $200</li>
                  </ul>
                  <div className={styles.button}>
                      <SecondaryButton content="back" border="1px solid" padding="6px 50px" boxShadow="0px 12px 25px rgba(66, 94, 94, 0.25)"></SecondaryButton>
                      <PrimaryButton content="Next" backgroundColor="#425E5E" padding="6px 50px" boxShadow="0px 12px 25px rgba(66, 94, 94, 0.25)"></PrimaryButton>

                  </div>
              </div>
          </div>
      </>
  )
}

export default Budget