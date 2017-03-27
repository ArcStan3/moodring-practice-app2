import React from 'react'
import { connect } from 'react-redux'
import { map, reverse } from 'ramda'
const Timeline = function (props) {
  const timeli = function (item) {
    return (
      <li key={item.recordedDate} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img className="w2 h2 w3-ns h3-ns br-100" src={item.image} />
        <div className="pl3 flex-auto">
          <span className="f2 db black-70">{item.status}</span>
          <span className="f6 db black-70">{item.recordedDate}</span>

        </div>
      </li>
    )
  }

  return (
    <section>
      <div className="pa4">
      <h2>Timeline</h2>
      <p>Mood History</p>
      <hr />
      <ul className="list">
        {map(timeli, reverse(props.timeline))}
      </ul>
      </div>
    </section>
  )
}

const connector = connect(state => state)

export default connector(Timeline)
