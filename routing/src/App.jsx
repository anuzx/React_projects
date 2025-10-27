import React from "react";
//npm i react-router-dom (for routing)
import { BrowserRouter, Routes, Route ,Link, Outlet} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NoPage />} />
          <Route
            path="/jee/online-coaching-class-11"
            element={<Class11program />}
          />
          <Route
            path="/jee/online-coaching-class-12"
            element={<Class12program />}
            />
            </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  //we rap all the routes inside layout and then use outlet to call all the routes (data inside it will change but header and footer will remain same)
  return (
    <div>
      <Link to="/">Home</Link>|
      <Link to="/jee/online-coaching-class-11">Class 11</Link>|
      <Link to="/jee/online-coaching-class-12">Class 12</Link>
      <Outlet />
      <br />
      FOOTER | CONTACT US
    </div>
  );
}

function NoPage() {
  return (
    <div>
      Sorry !! page not found
    </div>
  )
}
function Landing() {
  return <div>WELCOME TO ALLEN</div>;
}

function Class11program() {
  return <div>jee programs for class 11th</div>;
}

function Class12program() {
  return <div>jee programs for class 12th</div>;
}

export default App;
