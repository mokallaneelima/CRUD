import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {

  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const navigate = useNavigate()

  useEffect(()=> {
    axios.get('http://localhost:3000/getUser/'+id)
    .then(result => {console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setNumber(result.data.number)
    })
    .catch(err => console.log(err))
  },[])

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/UpdateUser/"+id, {name, email, number})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch(error => console.log(err))
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3  border border-black'>
            <form onSubmit={Update}>
                <h2>Update user</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Your Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Your Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Number</label>
                    <input type="text" placeholder='Enter Your Number' className='form-control' value={number} onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-warning border-black mt-2">update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser
