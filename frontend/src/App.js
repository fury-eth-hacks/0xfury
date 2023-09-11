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

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Routes>
            <Route path="/onboarding" element={<OnBoarding />} />
            <Route exact path="/" element={<Navigate to="/onboarding" />} />
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
