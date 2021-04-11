import React,{ useState,useEffect } from 'react'
import axios from 'axios'

function UserList() {
    const [data, setData] = useState([])
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    
    console.log(response);
    setData(response.data)
  })
  .catch(function (error) {
    
    console.log(error);
  });
      }, []);
    
      console.log( "DATA : ",data)
    return (
        <div className='row'>
      {data?.map(item=>{
    return(<div className='col-4'>
            <div className="card bg-light mb-3" style={{maxWidth: 288}} key={item.id} >
            <div className="card-header">{item.name} {item.username}</div>
            <div className="card-body">
                <h5 className="card-title">{item.email}</h5>
                <h5 className="card-title">{item.phone}</h5>
                <h5 className="card-title">{item.website}</h5>
                <p className="card-text">{item.address.suite} {item.address.street} {item.address.zipcode} {item.address.city}</p>
            </div>
            </div>
            </div>
        )


})}
        </div>
    )
}

export default UserList
