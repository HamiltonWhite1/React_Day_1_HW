import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from "../contexts/DataProvider"
import { firebaseApp } from '../firebase/config';
import moment from 'moment'
import { MessageList } from '../components/MessageList'
import { getFirestore } from 'firebase/firestore';


export const Inbox = ( props ) => {

  const p = props.user
  const { messages } = useContext( DataContext )
  const db = getFirestore()

  return (
      <React.Fragment>
        <h2> Your Incoming Messages </h2>
        <MessageList messages={ messages } />
      </React.Fragment>
  )
}

