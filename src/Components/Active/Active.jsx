import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Active.module.css'
import CountUp from "react-countup";
import {Typography} from '@material-ui/core';

const Active = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
    if (!confirmed) {
    return "Loading...";
  }
  const active = confirmed["value"] - recovered["value"] - deaths["value"];
    return (
        <div className={styles.activeContainer}>
          <h1>{country?country:"Global"}</h1>
          <br />
            <h2>Active cases:</h2>
            <Typography variant="h5">
                <CountUp
                  start={0}
                  end={active}
                  duration={2}
                  separator=","
                />
              </Typography>
            <br />
            <br />
            <Link to ="/">Back to dashboard</Link>
        </div>
        
    );
}

export default Active;