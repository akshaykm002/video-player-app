import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'


function WatchHistory() {
  const [history,setHistory]=useState([])
  const getAllwatchHistory = async()=>{
    //make api call
    const {data} =await getHistory()
    setHistory(data);

  }
  useEffect(()=>{
    getAllwatchHistory()
  },[])

  const handleDeleteHistory =async(id)=>{
    //make api call
    await deleteHistory(id)
    //get all history
    getAllwatchHistory()


  }
  return (
    <>
     <div className="container mt-5 mb-55 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',fontSize:'20px',color:'black'}}>
      <i className="fa-solid fa-arrow-left fa-beat-fade me-2"></i>Back to Home
      </Link>
     </div>
     <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>

        </tr>
      </thead>
      {/* <tbody>
        <td>1</td>
        <td>Akshay</td>
        <td> <a href=''>https://fontawesome.com/icons/arrow-left?f=classic&s=solid&an=beat-fade</a></td>
        <td>4/10/23</td>
      </tbody> */}
      {
        history?.length>0?
        history.map((item,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.embedlink} target='_blank'>{item?.embedlink}</a></td>
            <td>{item?.timeStamp}</td>
            <td><button onClick={()=>handleDeleteHistory(item.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>

        ))
        :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display!!!</p>
      }
     </table>
    </>
  )
}

export default WatchHistory
