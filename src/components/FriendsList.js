import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend'

export default function FriendsList(props) {
  const { friends, changeStatusFunc } = props
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  return (
    <div className='list-friends container'>
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {friends.map(friendObjs => {
        return (
        <Friend 
          key={friendObjs.id}
          friendDetails={friendObjs} 
          changeCivilStatus={changeStatusFunc}
          //name ={friendObj.name}
          //age={friendObj.age}
          //married={firendObj.married}
          //These are acceptiable too, but you can make it much shorter
          />
        )
      })}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
    </div>
  )
}

// <Friend la={friendObjs} />
// the inside the {} is a prop