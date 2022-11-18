import React from 'react'
import Line from '../../../../components/shared/Line/Line'
import PrimaryButton from '../../../../components/shared/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../../../components/shared/SecondaryButton/SecondaryButton'
import styles from './Description.module.css'

const Description = () => {
  return (
    <>
    
      <div className={`${styles.wrapper} flex`}>
        <div>
          <div className={styles.head}>
            <h3>2/4 Description</h3>
            <h2>Describe us a bit about your job</h2>
          </div>

          <span>this will let us and helper know about what kind of work you need the helper for</span>
        </div>
        <div className={styles.line}>
          <Line height="300px" width="2px" backgroundColor="#E2E2E2" ></Line>
        </div>
        <div className={styles.right}>
          <input type="text" />
          <h4>Example Description</h4>
          <p>
            i need a helper who can deliver 2 chairs to my shop , my shop is 5km from my house the helper can take address from me
          </p>
          <div className={styles.button}>
            <SecondaryButton content="Back" border="1px solid" padding="6px 50px" boxShadow="0px 12px 25px rgba(66, 94, 94, 0.25)"></SecondaryButton>
            <PrimaryButton content="Next" backgroundColor="#425E5E" padding="6px 50px"></PrimaryButton>

          </div>
        </div>
      </div>
    </>
  )
}

export default Description