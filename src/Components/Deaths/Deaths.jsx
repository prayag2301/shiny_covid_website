import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Deaths.module.css'
import CountUp from "react-countup";
import {Typography} from '@material-ui/core';

const Deaths = ({data: {deaths}, country}) => {
    if (!deaths) {
    return "Loading...";
  }
    return (
        <div className={styles.deathContainer}>
        <h1>{country ? country : "Global"}</h1>
            <br />
            <h2>Deaths:</h2>
            <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2}
                  separator=","
                />
              </Typography>
            <br />
            <br />
            <Link to ="/" className={styles.dash}>Back to dashboard</Link>
        </div>
        
    );
}

export default Deaths;