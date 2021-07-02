import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Infected.module.css'
import CountUp from 'react-countup'
import { Typography } from '@material-ui/core'

const Infected = ({data: {confirmed}, country}) => {
    if (!confirmed) {
    return "Loading...";
  }
    return (
        <div className={styles.infectContainer}>
        <h1>{country ? country : "Global"}</h1>
            <br />
            <h2>Total Cases:</h2>
            <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
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

export default Infected;