import React from 'react'
import { map, find, propEq } from 'ramda'
import { connect } from 'react-redux'

const Entry = function (props) {
  const clickHandler = function (id, moods) {
    return function (event) {
      props.select(id, moods, props.history)
    }
  }

  const li = function (item) {
    return (
      <li key={item.id} className="flex items-center lh-copy pa3 ph0-l bb b--black-10"
        onClick={clickHandler(item.id, props.moods)}
        >
        <img className="w2 h2 w3-ns h3-ns br-100" src={item.image} />
        <div className="pl3 flex-auto">
          <span className="f2 db black-70">{item.text}</span>
        </div>
      </li>
    )
  }

  return (
    <section>
      <div className="pa4">
      <h2>Set Mood</h2>
      <p>Choose one of the following items that closely fits your current mood</p>
      <hr />
      <ul className="list">
        {map(li, props.moods)}
      </ul>
      </div>
    </section>

  )
}

const mapStateToProps = function (state) {
  return {
    moods: state.moods || []
  }
}

const mapActionsToProps = function (dispatch) {
  return {
    select: (id, moods, history) => {
      const moodStatuses = map(mood => ({
        id: mood.id,
        status: mood.text,
        image: mood.image,
        recordedDate: new Date().toISOString()
      }), moods)

      const moodStatus = find(propEq('id', id), moodStatuses)

      dispatch({type: 'SET_STATUS', payload: moodStatus})
      dispatch({type: 'APPEND_STATUS', payload: moodStatus})
      history.push('/')
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Entry)
