import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <h1 className={styles.title}>
            <a>
              HI,MY NAME IS
            </a>
          </h1>
          <h1 className={styles.title}>
            Sheridan Alexander
          </h1>
        <div className={styles.container}>
          <p className={styles.description}>
            I love building amazing software and learning new languages, currently I'm focused on gaining experience in the software development field, as I would use this to work my way up to becoming a senior software developer in the future.
          </p>
        </div>
      </div>  


      <div className={styles.container}>
        <div className={styles.main}>
          <Image src="/20221031_132112.jpg" width={350} height={350}/>
          <p className={styles.paragraph}>
              I'm currently 22 years old, and will be graduating in December 2022 with a Bachelor of Science Degree in Computer Science from the University of the Western Cape. I started with coding in 2018 as part of one of my subjects called I.T, and since then I have been fascinated with learning new languages and developing software.
              When I am not coding or working, I spend time with my family and friends to relax and de-stress.
          </p>
          <p className={styles.paragraph}>
            The languages that I'm currently proficient in are:
          </p>
          <p className={styles.list}>
            - JAVA
          </p>
          <p className={styles.list}>
            - PYTHON
          </p>
          <p className={styles.list}>
            - MySQL
          </p>
          <p className={styles.list}>
            - DELPHI
          </p>

          <h2 className={styles.subtitle}>  
            Why SovTech?
          </h2>
          <p className={styles.description}>
            As a student about to be a graduate SovTech stood out to me because of your companies core values namely Smile, Adapt, Results, Tech, Partnership, Sorted, Worldclass, Blitz and GiveASh*t. After reading and understanding the core values of your company, I discovered that these align with my morals and values.
            The approach as to how the SovTech graduate program is managed is perfect for what I need, as I am a practical/visual learner and being assigned a mentor with experience in the field I want to persuae would do me good, as I need to gain as much knowledge and experience from professionals in the software industry to gain a future employment opportunity in the industry.
            I have no doubt that SovTech would be able to provide me with a comfortable and friendly work environment to express myself and fufil my duties.
          </p>
        </div>
      </div>
      
    </div>
  )
}
