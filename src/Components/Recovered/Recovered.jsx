import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Recovered.module.css'
import CountUp from 'react-countup'
import { Typography } from '@material-ui/core'

const Recovered = ({data:{recovered},country}) => {
    if (!recovered) {
    return "Loading...";
  }
    return (
        <div className={styles.recoveryContainer}>
        <h1>{country ? country : "Global"}</h1>
            <br />
            <h2>Recovered Cases:</h2>
            <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
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

export default Recovered;