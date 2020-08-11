import { hot } from 'react-hot-loader/root';
import React from 'react';

import style from './styles.scss';
import logoSrc from './logo.png';

const App = () => 
  <div className={style.message}>
    
    <img className={style.logo} src={logoSrc} alt="Xsolla logo" />
    
    <span className={style.title}>Xsolla</span>
    <br />
    <input />
  </div>

export default hot(App);