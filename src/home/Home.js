import React, { useState, useEffect } from 'react'
import styles from "./Home.module.css"
import logo from "../assets/logo.png"

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home">
      <div className={styles.main}>
        <div className={styles.center}>
          <div className={`${styles.logo} ${isVisible ? styles.visible : styles.hidden} ${styles.delay1}`}>
            <img src={logo} className={styles.image}/>
          </div>
          <div className={`${styles.heading} ${isVisible ? styles.visible : styles.hidden} ${styles.delay2}`}>
            PARIVARTAN
          </div>
          <div className={`${styles.heading2} ${isVisible ? styles.visible : styles.hidden} ${styles.delay3}`}>
            Transforming Schools. Empowering Educators. Shaping Futures.
          </div>
          <div className={`${styles.belowtext} ${isVisible ? styles.visible : styles.hidden} ${styles.delay4}`}>
            Parivartan Learning Solutions partners with schools to evolve people, pedagogy, and processes.
          </div>
          <div className={`${styles.buttonpos} ${isVisible ? styles.visible : styles.hidden} ${styles.delay5}`}>
            <button className={styles.signInButton}>Learn More</button>
            <button className={styles.signInButton}>Sign Up for free</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home