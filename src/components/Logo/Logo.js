import React from 'react';
import claneLogo from '../../assets/images/clane-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={claneLogo} alt='ClaneLogo'/>
  </div>
)




export default logo;