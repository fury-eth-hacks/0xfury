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
import RewardFirst from "./pages/rewards/first";
import Loading from "./pages/loading";
import Question1 from "./pages/rewards/questions1"
import Question2 from "./pages/rewards/questions2"
import Question3 from "./pages/rewards/questions3"
import Question4 from "./pages/rewards/questions4"
import Question5 from "./pages/rewards/questions5"
import Exclamation from "./pages/rewards/exclamation"
import Vouchers from "./pages/rewards/vouchers"

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
            <Route
              path="/rewards/*"
              element={
                <Routes>
                  <Route path="/first" element={<RewardFirst />} />
                  <Route path="/question1" element={<Question1 />} />
                  <Route path="/question2" element={<Question2 />} />
                  <Route path="/question3" element={<Question3 />} />
                  <Route path="/question4" element={<Question4 />} />
                  <Route path="/exclamation" element={<Exclamation />} />
                  <Route path="/question5" element={<Question5 />} />
                  <Route path="/vouchers" element={<Vouchers />} />
                  <Route
                    path="/"
                    element={<Navigate to="/rewards/first" />}
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
