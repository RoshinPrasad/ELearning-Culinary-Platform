import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Footer from '../home/Footer'

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' /><br></br>
      <OnlineCourses />
      <Footer />
    </>
  )
}

export default CourseHome