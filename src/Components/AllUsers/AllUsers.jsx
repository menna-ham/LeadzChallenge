import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { User } from '../User/User';
import styles from './AllUsers.module.css'

export const AllUsers = () => {
    const [AllUsers, setAllUsers] = useState([])

    let getAllUsers = async ()=>{
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data);
        setAllUsers(data);
 }


    useEffect(()=>{
        getAllUsers()
    },[])
  return (
    <>
    <div className={`${styles.all}`}>
      {
        AllUsers.length !=0? 
        AllUsers.map((user)=>(
          <User
          key={user.id}
          user={user}

          />

        ))
        
        :'error'
      }
    </div>
    </>
  )
}
