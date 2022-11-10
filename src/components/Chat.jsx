// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { db } from "../utils/firebase-config,";

// export default function Chat() {
//   const [messages, setMessages] = useState([]);
//   useEffect(() => {
//     db
//       .collection("messages")
//       .orderBy("createdAt")
//       .limit(50)
//       .onSnapshot(snapshot => {
//         // console.log(snapshot.docs.map((doc) => doc.data()));
//         setMessages(snapshot.docs.map((doc) => doc.data()));
//       });
//   },[]);
// //   console.log(db.collection("messages"));
//   return (
//     <div>
//       {messages.map(({ id, text, photoURL }) => {
//         console.log(id);
//         console.log(text);
//         <div key={id}>
//           <img src={photoURL} alt="" />
//           <p>{text}</p>
//         </div>;
//       })}
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from 'react'
import { DB, firebaseAuth } from '../utils/firebase-config,'
// import SendMessage from './SendMessage'
// import SignOut from './SignOut'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        DB.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <div className="msgs">
                {messages.map(({ id, text, photoURL }) => (
                    <div>
                        <div key={id} >
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat