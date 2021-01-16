import React from "react"
import styles from "./styles/about.module.scss"

interface QuestionProps {
  question: string
  answer: string
}

const Question = (props: QuestionProps) => {
  return (
    <div className={styles.faqGroup}>
      <div className={styles.question}>{props.question}</div>
      <div className={styles.answer}>{props.answer}</div>
    </div>
  )
}

const AboutPage = () => (
  <article className={styles.about}>
    <Question
      question="What is this website?"
      answer="This web app acts as my online resume. All the cool kids are doing it these days so I thought I'd put something together too."
    />
    <Question
      question="What do you enjoy doing?"
      answer="I am a full-stack developer who grew up writing bash scripts and AWK, but right now my primary focus and passion is on the front-end. 
      I love creating pixel perfect UIs.  I love the science behind what makes good UX and design. I love accessibility. 
      But I am a greedy person. I also love to work on web internals like AJAX libraries, webpack plugins, and UI kits."
    />
    <Question
      question="Your dream position?"
      answer="I love starting things from scratch, and being a player-coach in front-end. I love to alternate between designing architecture on the bleeding edge,
      and getting down and dirty in the implementation details. I love learning more about the back-end and I still dabble in kafka, micro-services, and C#. But when it comes 
      down to the day-to-day, my heart is with HTML/CSS/JS. I love to interface with users, especially when it comes to finance apps :)"
    />
    <Question
      question="Any core beliefs?"
      answer="I am glad you asked! I am a web developer through and through. This means I have a fundamental belief in the pillars that are HTML/CSS/JS. While I recognize that
      browser compatibility is still a challenge, it is trending towards convergence. However, I also believe that the web will also diverge in innovative areas, which will cause chaos and interop
      issues in the open source world. But that's the excitment of it, no?"
    />
    <Question
      question="Why do you like React?"
      answer="In recent years, I think Vue, Angular, React have all been very good at taking patterns from each other (Vue composition for example). Reasons to select React in today's context 
      is mainly due to React's very low barrier of entry compared to frameworks such as Vue and Angular. React's ability to interop with other frameworks is also a huge advantage when it comes to migration.
      I can talk about fiber, JSX, and functional programming all day, but in the end, I am afraid we're all just chasing a certain trend, and following where the smartest third-party developers are going.
      But hey, that's front-end for ya?"
    />
    <Question
      question="Hobbies?"
      answer="GO the board game. I used to be a 3-dan in GO. But now I play at a 1k level."
    />
  </article>
)

export default AboutPage
