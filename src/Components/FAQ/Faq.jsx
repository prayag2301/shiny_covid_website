import React, { Component } from 'react';
import Faq from 'react-faq-component';


const data = {
  title: "FAQ about Covid-19",
  rows: [
    {
      title: "Can you still get Covid If you're fully vaccinated?",
      content: "Doctors say even fully vaccinated people need to pay attention to Covid-19 symptoms, such as headache and congestion."
    },
    {
      title: "Does the WHO recommend the Covid vaccine for children?",
      content: "The WHO states that since they tend to experience mild disease symptoms compared to adults, they aren't in urgent need for vaccinations unless they have a pre-existing condition. Instead, vaccines should be prioritized to those with conditions, health care workers, and older individuals."
    },
    {
      title: "Is the Covid vaccine safe for pregnancy?",
      content: "The ministry informed that the COVID-19 vaccines available are safe and vaccination protects pregnant women against COVID-19 illness/disease. Like any medicine, a vaccine may have side effects which are normally mild."
    },
    {
      title: "In what conditions does COVID-19 survive the longest?",
      content: "Coronaviruses die very quickly when exposed to the UV light in sunlight. Like other enveloped viruses, SARS-CoV-2 survives longest when the temperature is at room temperature or lower, and when the relative humidity is low (<50%)."
    }]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Faq data={data}
    styles={{
        
  bgColor: "white",

        titlePaddingLeft:'50px',
        titleTextColor: "#48482a",
        rowTitleColor: "#183f7d",
        rowTitleTextSize: 'large',
        rowTitlePaddingLeft: '50px',
        rowContentColor: "#48484a",
        rowContentTextSize: '16px',
        rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
        rowContentPaddingLeft: '50px',
        rowContentPaddingRight: '150px',
        arrowColor: "black",
    }} 
        />
      </div>
    )
  }
}