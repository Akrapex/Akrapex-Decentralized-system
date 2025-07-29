import React from 'react'
import AvailableCourseMainSection from '../Components/AvailableCourseMainSection'
import ReadyToStart from '../Components/ReadyToStart'
import ListYourProperty from '../Components/ListYourProperty'
import AvailablecoursesHerosection from '../Components/AvailablecoursesHerosection'

const AvailableCourses = () => {
  return (
    <div>
      <AvailablecoursesHerosection/>
      <AvailableCourseMainSection/>
      <ListYourProperty/>
    </div>
  )
}

export default AvailableCourses
