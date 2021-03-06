import React, { useState, useEffect, useContext } from 'react'
import TrainingCalendarHeader from '../trainingCalendar/TrainingCalendarHeader'
import TrainingCalendar from '../trainingCalendar/TrainingCalendar'
import ActivitiesContext from '../../context/activities/activitiesContext'
import ProfileContext from '../../context/profile/profileContext'

const CalendarPage = () => {
  const [selected, setSelected] = useState('activity_time')
  const [year, setYear] = useState(2020)

  const activitiesContext = useContext(ActivitiesContext)
  const profileContext = useContext(ProfileContext)

  const {
    getActivitiesByDate,
    activitiesForCalendar,
    loading
  } = activitiesContext

  useEffect(() => {
    getActivitiesByDate(
      year,
      !profileContext.imperialToggle ? 'metric' : 'imperial'
    )
  }, [year])

  return (
    <>
      {!loading && activitiesForCalendar && (
        <section className='calendar-page'>
          <h1 className='title'>Training Calendar</h1>
          <h3>
            <span
              onClick={() => setYear(y => y - 1)}
              className='material-icons'
            >
              keyboard_arrow_left
            </span>
            <div className='year'>{year}</div>
            <span
              onClick={() => setYear(y => y + 1)}
              className='material-icons'
            >
              keyboard_arrow_right
            </span>
          </h3>
          <TrainingCalendarHeader
            activitiesForCalendar={activitiesForCalendar}
            selected={selected}
            changeSelected={type => setSelected(type)}
          />
          <TrainingCalendar
            activitiesForCalendar={activitiesForCalendar}
            selected={selected}
          />
        </section>
      )}
    </>
  )
}

export default CalendarPage
