import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("")
    const [ email, setEmail] = useState("")

    const history = useNavigate()

    let handleUpdate = (e)=>{
        e.preventDefault()
        axios.put(`https://654269b7ad8044116ed355c0.mockapi.io/axioscrud/${id}`,
        {
            name: name,
            email: email
        }
        ).then(()=>{
            history("/read")
        })
    }

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])

  return (
    <div className=' w-100 mt-5 d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center flex-column gap-5 w-50 p-4 border border-dark rounded'>

                <h1>UPDATE DATA</h1>

                <form className='w-100 d-flex justify-content-center align-items-start flex-column gap-3'>
                    <div className="form-group w-100">
                        <label for="name" className='mb-2'>Enter Name</label>
                        <input className="form-control"
                           value={name}
                           onChange={(e)=>setName(e.target.value)}
                            type="text" placeholder="Enter Name" />
                    </div>

                    <div className='form-group w-100'>
                        <label for="exampleInputEmail1" className='mb-2'>Email address</label>
                        <input type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={handleUpdate}>
                        Update
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Update
