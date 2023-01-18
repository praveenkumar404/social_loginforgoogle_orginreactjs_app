import { gapi } from 'gapi-script';
import React, { useEffect } from 'react'
import Mysocialloginpage from './Mysocialloginpage';
import './Mysocialdashboadpage.css'

const Usesociallogin = () => {
      //const clientId = "343703553242-7l4rpc34ksqqevueuvl4ukpkta44ltiq.apps.googleusercontent.com";
      const clientId = "689719767138-u2lufsb3djp3c20gpo430jlls4n0hnpu.apps.googleusercontent.com"
      useEffect(()=>{
            function start(){
                  gapi.client.init({
                        clientId: clientId,
                        scope: ""
                  })
            };
            gapi.load('client:auth2',start)
      })
  return (
    <div>
      <h1>My Social Account</h1>
      <Mysocialloginpage/>
    </div>
  )
}

export default Usesociallogin
