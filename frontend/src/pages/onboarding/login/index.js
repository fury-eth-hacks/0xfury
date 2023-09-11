import React, { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

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
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
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
