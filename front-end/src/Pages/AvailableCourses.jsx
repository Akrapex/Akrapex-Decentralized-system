import React from 'react'
import AvailableCourseMainSection from '../Components/AvailableCourseMainSection'
import ReadyToStart from '../Components/ReadyToStart'
import ListYourProperty from '../Components/ListYourProperty'
import AvailablecoursesHerosection from '../Components/AvailablecoursesHerosection'
import LatestFromOurBlog from '../Components/LatestFromOurBlog'

const AvailableCourses = () => {
  return (
    <div>
      <AvailablecoursesHerosection/>
      <AvailableCourseMainSection/>
      <ListYourProperty/>
      <LatestFromOurBlog/>
    </div>
  )
}

export default AvailableCourses
