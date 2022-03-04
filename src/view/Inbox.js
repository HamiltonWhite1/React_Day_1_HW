import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from "../contexts/DataProvider"
import { firebaseApp } from '../firebase/config';
import moment from 'moment'


export const Inbox = ( props ) => {

  const p = props.user
  const { messages } = useContext( DataContext )

  return (
      <React.Fragment>
          { messages.map(p) }
      </React.Fragment>
  )
}

