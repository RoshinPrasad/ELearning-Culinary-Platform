import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/additional/Loader";

const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const Team = lazy(() => import("./components/team/Team"));
const Pricing = lazy(() => import("./components/pricing/Pricing"));
const Blog = lazy(() => import("./components/blog/Blog"));
const Contact = lazy(() => import("./components/contact/Contact"));
const CourseHome = lazy(() => import("./components/allcourses/CourseHome"));

const Userlogin = lazy(() => import("./components/Userlogin"));
const Usersignup = lazy(() => import("./components/Usersignup"));
const UserProfile = lazy(() => import("./components/UserProfile"));

const Adminlogin = lazy(() => import("./components/admin/Adminlogin"));
const AdminHome = lazy(() => import("./components/admin/Adminhome"));
const AdminProfile = lazy(() => import("./components/admin/AdminProfile"));
const Create = lazy(() => import("./components/admin/Create"));
const EditUser = lazy(() => import("./components/admin/EditUser"));
const DeleteUser = lazy(() => import("./components/admin/DeleteUser"));
const Mentorsmanage = lazy(() => import("./components/admin/Mentorsmanage"));

const Mentorssignup = lazy(() => import("./components/mentor/Mentorssignup"));
const MentorLogin = lazy(() => import("./components/mentor/MentorLogin"));
const Onboard = lazy(() => import("./components/mentor/Onboard"));
const MentorDashboard = lazy(() => import("./components/mentor/mentorDashboard"));
const DashboardComponent = lazy(() => import("./components/mentor/DashboardComponent"));
const ClassManagementComponent = lazy(() => import("./components/mentor/ClassManagementComponent"));
const MentorProfileComponent = lazy(() => import("./components/mentor/MentorProfileComponent"));
const NotificationsComponent = lazy(() => import("./components/mentor/NotificationsComponent"));
const ChatComponent = lazy(() => import("./components/mentor/ChatComponent"));

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? <Loader /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* user routes */}
            <Route path="/login" element={<Userlogin />} />
            <Route path="/signup" element={<Usersignup />} />
            <Route path="/" element={<LoaderWrapper><Home /></LoaderWrapper>} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CourseHome />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/journal" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* admin routes */}
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/delete/:id" element={<DeleteUser />} />
            <Route path="/mentorsmanage" element={<Mentorsmanage />} />

            {/* mentor routes */}
            <Route path="/mentorsignup" element={<Mentorssignup />} />
            <Route path="/mentorlogin" element={<MentorLogin />} />
            <Route path="/mentoronboard" element={<Onboard />} />
            <Route path="/mentordashboard" element={<MentorDashboard />} />
            <Route path="/dashboard" element={<DashboardComponent />} />
            <Route path="/classManagement" element={<ClassManagementComponent />} />
            <Route path="/mentorProfile" element={<MentorProfileComponent />} />
            <Route path="/notifications" element={<NotificationsComponent />} />
            <Route path="/chat" element={<ChatComponent />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
