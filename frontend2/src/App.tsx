import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Error from "./pages/error";
import OnBoarding from "./pages/onboarding";
import Login from "./pages/onboarding/login";
import AfterOnBoarding from "./pages/onboarding/after-onboarding";
import Loading from "./pages/loading";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Routes>
            <Route
              path="/onboarding/*"
              element={
                <Routes>
                  <Route path="/welcome" element={<OnBoarding />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/afteronboarding"
                    element={<AfterOnBoarding />}
                  />
                  <Route
                    path="/"
                    element={<Navigate to="/onboarding/welcome" />}
                  />
                </Routes>
              }
            />
            <Route path="/loading" element={<Loading />} />
            <Route path="/" element={<Navigate to="/onboarding/welcome" />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
