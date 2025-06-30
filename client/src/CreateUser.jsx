import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/createUser", {name, email, number})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch(error => console.log(err))
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3 border border-black'>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Your Name' className='form-control' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Your Email' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Number</label>
                    <input type="text" placeholder='Enter Your Number' className='form-control' onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-success border-black mt-2">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateUser
