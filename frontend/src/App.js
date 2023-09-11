import React, { Suspense } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Error from './pages/error'
import OnBoarding from './pages/onboarding'
import Login from './pages/onboarding/login'

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Routes>
            <Route path="/onboarding/*" element={
              <Routes>
                <Route path="/welcome" element={<OnBoarding />} />
                <Route path="/login" element={<Login />} />
                <Route exact path="/" element={<Navigate to="/onboarding/welcome" />} />
              </Routes>
              } 
            />
            <Route exact path="/" element={<Navigate to="/onboarding/welcome" />} />
            <Route
              path="*"
              element={<Error />}
            />
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
