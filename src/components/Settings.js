import React from 'react';

function Settings(props) {
  return <div id="Settings">
      {props.additional.map(ad=>{
          return ad;
      })}
  </div>;
}

export default Settings;
