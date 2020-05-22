import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'

const DashboardCard = ({ activity, user }) => {
  const { name, created_at, activity_type, activity_time, distance } = activity

  const duration = moment.duration(activity_time, 'seconds')

  const activityLength = duration.format('hh:mm:ss')

  return (
    <div className='card m-1'>
      <span className='material-icons share'>share</span>
      <div className='card__main'>
        <div className='card__main--left'>
          <img
            src='https://previews.123rf.com/images/maridav/maridav1801/maridav180100315/93625825-road-bike-cyclist-man-sport-athlete-training-cardio-workout-on-racing-bicycle-male-biker-biking-outd.jpg'
            alt='card image'
          />
          <span className='material-icons'>
            {activity_type === 'Run' ? 'directions_run' : 'directions_bike'}
          </span>
        </div>
        <div className='card__main--right'>
          <h3>{user.name ? user.name : 'why no name??'}</h3>
          <small>
            <Moment format='MM-DD-YYYY hh:mm a'>{created_at}</Moment>
          </small>
          <h2>{name ? name : activity_type}</h2>
          <div className='stats'>
            <div className='stats--item'>
              <small>Distance</small>
              <div className='stat'>{distance} meters</div>
            </div>
            <div className='stats--item'>
              <small>Time</small>
              <div className='stat'>{activityLength}</div>
            </div>
            <div className='stats--item'>
              <small>Pace</small>
              <div className='stat'>
                {Math.round((activity_time / distance) * 100) / 100} m/s
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card__footer'>
        <div className='card__footer--btns'>
          <button className='btn-small'>
            <span className='material-icons'>thumb_up</span>
          </button>
          <button className='btn-small'>
            <span className='material-icons'>comment</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard