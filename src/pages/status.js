import React from 'react'
import { connect } from 'react-redux'

const Status = function (props) {
  return (
    <section>
      <div className="ma4 ba br2 pa4">
        <div className="center">
          <img src={props.currentStatus.image} />
        </div>
        <div className="f3">{props.currentStatus.status}</div>
        <div>Last Updated: {props.currentStatus.recordedDate}</div>
      </div>
    </section>
  )
}

const connector = connect(state => state)

export default connector(Status)
