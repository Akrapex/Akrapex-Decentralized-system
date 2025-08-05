import React from 'react'
import AvailableCourseMainSection from '../Components/AvailableCourseMainSection'
import ReadyToStart from '../Components/ReadyToStart'
import ListYourProperty from '../Components/ListYourProperty'
import AvailablecoursesHerosection from '../Components/AvailablecoursesHerosection'
import LatestFromOurBlog from '../Components/LatestFromOurBlog'
import ReadyMasterRealEstate from '../Components/ReadyMasterRealEstate'

const AvailableCourses = () => {
  return (
    <div>
      <AvailablecoursesHerosection/>
      <AvailableCourseMainSection/>
      <ReadyMasterRealEstate/>
      <LatestFromOurBlog/>
    </div>
  )
}

export default AvailableCourses
