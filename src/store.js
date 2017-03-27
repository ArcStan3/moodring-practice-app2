import { createStore, combineReducers } from 'redux'
import { append } from 'ramda'

const defaultMoods = [{
  id: 1,
  text: 'Ecstatic', image: '/ecstatic.png'
}, {
  id: 2,
  text: 'Happy', image: '/happy.png'
},{
  id: 3,
  text: 'So So', image: '/so-so.png'
},{
  id: 4,
  text: 'Sad', image: '/sad.png'
},{
  id: 5,
  text: 'Depressed', image: '/depressed.png'
}]

const defaultStatus = {
  status: 'Happy',
  image: '/happy.png',
  recordedDate: new Date().toISOString()
}

const defaultTimeline = []

const status = function (status=defaultStatus, action) {
  switch (action.type) {
    case 'SET_STATUS':
      return action.payload
    default:
      return status
  }
}

const moods = function (moods=defaultMoods, action) {
  return moods
}

const timeline = function (timeline=defaultTimeline, action) {
  switch (action.type) {
    case 'APPEND_STATUS':

      console.log(action.payload)
      return append(action.payload, timeline)
    default:
      return timeline
  }
}


const store = createStore(
  combineReducers({
    currentStatus: status,
    moods,
    timeline
  })
)

export default store
