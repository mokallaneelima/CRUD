import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete  } from "react-icons/md"; 
import { HiPencil } from "react-icons/hi";

function Users() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3000')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteUser/'+id)
    .then(res => {console.log(res)
        window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='w-60 bg-white rounded p-3  border border-black'>
        <Link to="/Create" className='btn btn-success mb-2'>Add +</Link>
        <table className="table table-bordered ">
          <thead>
             <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>
                    <Link to={`/Update/${user._id}`} className='btn btn-sm btn-success  m-2 rounded-circle'>
                        <HiPencil size={25}/>
                    </Link>
                    <button 
                        className="btn btn-sm btn-danger rounded-circle" 
                        onClick={(e) => handleDelete(user._id)}>
                        <MdDelete size={25}/>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Users;
