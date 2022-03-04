import React from 'react'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
// import { db } from '../firebase/config';



export const Sent = () => {

  const db = getFirestore()

  const saveMessage = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];
    console.log(elementsArray);

    const messageData = elementsArray.reduce( async (accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      const addNewMessage = await addDoc(collection(db, "user"), {
        accumulator
      })
      return addNewMessage
    }, {});

  }

    return (
      <div className="container">
        <h1>Send a message to your friends!</h1>
        <form onSubmit={saveMessage}>
          <input type="text" id="newUserMessage" placeholder='Type your message'></input>
          <button>Submit your message</button>
        </form>
      </div>
    )
  }

