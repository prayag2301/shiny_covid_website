import React, { useState } from 'react'
import FAQ from './FAQ'
import styles from './newfaq.css'




function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Is it ok for me to donate blood?',
      answer: 'In healthcare settings across the United States, donated blood is a lifesaving, essential part of caring for patients. The need for donated blood is constant, and blood centers are open and in urgent need of donations. CDC encourages people who are well to continue to donate blood if they are able, even if they are practicing social distancing because of COVID-19. CDC is supporting blood centers by providing recommendations that will keep donors and staff safe. Examples of these recommendations include spacing donor chairs 6 feet apart, thoroughly adhering to environmental cleaning practices, and encouraging donors to make donation appointments ahead of time.',
      open: true
    },
    {
      question: 'What are some manifestations of post COVID-19 conditions?',
      answer: 'Known manifestations of post-COVID conditions include a range of troubling physical symptoms, such as severe fatigue and increased risk of damage to the heart, lungs and brain.',
      open: true
    },
    {
      question: 'Can you transmit Covid after being fully vaccinated?',
      answer: 'while vaccinated people are less likely to be hospitalized because of the disease, this doesnt mean they should drop their guard: they can still get ill from the virus and can still spread it to others.',
      open: true
    },
    {
      question: 'Will you test positive for Covid after vaccination?',
      answer: 'Getting vaccinated wont make you show up as positive on PCR tests. That is because these tests look for copies of the genetic material of the virus as an indication that you have been infected.',
      open: true
    }

  ]);



  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      }
      else {
        faq.open = false
      }

      return faq;
    }))
  }

  return (
    <div className="Faq">
      <h1>FAQ SECTION</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <div style={{
            margin: '20px',
          }} >
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
