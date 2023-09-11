import React, { useEffect, useState } from "react"
import { googleLogout, useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import './login.css'

const Login = () => {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <React.Fragment>
      {!profile ? (
        <div className="login-index">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <p className="text-wrapper">Simply sign in, and everything will be taken care of</p>
              <div className="div">Sign in</div>
              <img
                className="fury-logo-graphic"
                alt="Fury logo graphic"
                src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe88bd328c829ae1d3b1d9/img/fury-logo-graphic-2@2x.png"
              />
              <div className="text-wrapper-2">Continue with</div>
              <button onClick={() => login()}>
                <img
                  className="google"
                  alt="Google"
                  src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fec1d2abb3145103b59ea0/img/google.png"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <h1>
            Congratulations {profile.email}, you’ve created a Fury wallet!
          </h1>
          <button onClick={logOut}>Log out</button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Login;
