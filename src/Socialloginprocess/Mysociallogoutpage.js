import React, { useState } from 'react'
import GoogleLogout from 'react-google-login'
import {useNavigate} from "react-router-dom"
import './Mysocialdashboadpage.css'

const Mysociallogoutpage = () => {
      //const clientId = "343703553242-7l4rpc34ksqqevueuvl4ukpkta44ltiq.apps.googleusercontent.com";
      const clientId = "689719767138-u2lufsb3djp3c20gpo430jlls4n0hnpu.apps.googleusercontent.com"

      const mysocialhome = useNavigate();
      const [mychoosedase, setmychoosedase] = useState()

      const onScl_logins_sucess = (slc_response) => {
            
            setmychoosedase("Loginnodash")

            if(mychoosedase === "Loginnodash")
              {
                mysocialhome("/Usesociallogin")
                console.log("Logout Successfulled !",slc_response.profileObj)
              }
      }

  return (
    <div>
      <div className="glout">
      <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onSuccess={onScl_logins_sucess}
      isSignedIn={true}
      />
      </div>
    </div>
  )
}

export default Mysociallogoutpage
