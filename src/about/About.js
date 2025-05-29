import React from 'react'
import styles from "./About.module.css"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image1 from "../assets/bullseye.png"
function About() {
  return (
     <section id="about" >
    <div className={styles.main}>
    <div className={styles.leftside}>
        <img src={image1} className={styles.image1}/>
      </div>

      <div className={styles.rightside}>
      <div className={styles.heading}>
        Our Mission
      </div>
      <div className={styles.belowtext2}>
      Parivartan Learning Solutions is committed to building inclusive, innovative learning spaces by:
        </div>
        <div className={styles.belowtext3}>
        <TaskAltIcon/> Equipping educators with modern tools and pedagogical practices
        </div>
        <div className={styles.belowtext4}>
        <TaskAltIcon/> Empowering schools to adopt student-centric learning methods
        </div>
        <div className={styles.belowtext5}>
        <TaskAltIcon/> Creating sustainable change through collaborative development
        </div>
        <div className={styles.belowtext6}>
        <TaskAltIcon/> Fostering leadership and continuous professional growth in teachers
        </div>
        <div className={styles.buttonpos2}>
        <button className={styles.signInButton2}>Read More <ArrowForwardIcon className={styles.buttonicon}/></button>
      </div>
      </div>

    
   
    
    </div>
    </section>
  )
}

export default About