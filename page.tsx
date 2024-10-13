import cssStyle from "./about.module.css";
console.log(cssStyle,"CSS-Style");
import React from 'react'

const Aboutpage = () => {
  return (
    <div>
      
    <h1 className={cssStyle.green}><b>This is my about page</b></h1>
    <h2 className={cssStyle.yellow}><b>ABOUT</b></h2>
    </div>
  )
}

export default Aboutpage
