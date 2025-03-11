import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Components/Dashboard";
import AddEvent from "./Components/AddEvent";
import AddCategory from "./Components/AddCategory";
import AddGallary from "./Components/AddGallary";
import UserProfile from "./Components/UserProfile";
import ContactList from "./Components/ContactList";
import Login from "./Components/Login";
import "./Styles/main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/AddEvent" element={<AddEvent />} />
          <Route path="/AddCategory" element={<AddCategory />} />
          <Route path="/AddGallary" element={<AddGallary />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/ContactList" element={<ContactList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
