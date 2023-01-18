
import { useState } from 'react'
import GoogleLogin from 'react-google-login'
import {useNavigate} from "react-router-dom"
import './Mysocialdashboadpage.css'

const Mysocialloginpage = () => {
      //const clientId = "343703553242-7l4rpc34ksqqevueuvl4ukpkta44ltiq.apps.googleusercontent.com";
      const clientId = "689719767138-u2lufsb3djp3c20gpo430jlls4n0hnpu.apps.googleusercontent.com"

      const mysocialhome = useNavigate();
      const [mychoosedase, setmychoosedase] = useState()

      const onScl_login_sucess = (slc_response) => {
            setmychoosedase("Logindash")

            if(mychoosedase === "Logindash")
              {
                mysocialhome("/Mysocialdashboadpage")
                console.log("Login Successfulled !",slc_response.profileObj)
              }

      }

      const onScl_logout_sucess = (slc_response) => {
            console.log("Login Failed , You need Try Again! !",slc_response)
            setmychoosedase("Loginnodash")

            if(mychoosedase === "Loginnodash")
              {
                mysocialhome("/Usesociallogin")
              }
      }

      
  return (
    <div>
      <div className="glin">
      <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onScl_login_sucess}
      onFailure={onScl_logout_sucess}
      isSignedIn={true}
      />
      </div>
    </div>

  )
}

export default Mysocialloginpage
