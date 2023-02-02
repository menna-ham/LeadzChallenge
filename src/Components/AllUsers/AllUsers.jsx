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
        //https://maps.googleapis.com/maps/api/geocode/json?latlng=-37.3159,81.1496&key=AIzaSyCDLWjbFMQwtv088sGrVOkZ5oy73NZhmuE
        //https://www.openstreetmap.org/#map=18/-37.3159/81.1496`
        //https://www.mapquestapi.com/geocoding/v1/reverse?key=Q23FGz00vMDynjbaAdLB5bXAYAMDTSKO&location=37.3159%2C81.1496&outFormat=json&thumbMaps=false'
        //https://geocode.maps.co/reverse?lat=-37.3159&lon=81.1496
                //AIzaSyCDLWjbFMQwtv088sGrVOkZ5oy73NZhmuE
        //https://maps.googleapis.com/maps/api/js?key=AIzaSyCDLWjbFMQwtv088sGrVOkZ5oy73NZhmuE&libraries=places
        //https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyCDLWjbFMQwtv088sGrVOkZ5oy73NZhmuE
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
