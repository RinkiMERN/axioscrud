import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate()

  
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log('clicked');
        axios.post(
            "https://654269b7ad8044116ed355c0.mockapi.io/axioscrud",
            {
                name: name,
                email: email,
                
            },
        ).then(()=>{
            history("/read")
        })
       
    }

    return (
        <div className=' w-100 mt-5 d-flex justify-content-center align-items-center flex-column'>
            <div className='d-flex  flex-row gap-5  mb-4 '>
            <h3>CREATE FORM</h3>
             <Link to="/read">
             <button type="btn" className='btn btn-primary'>SHOW DATA</button>
             </Link>
            </div>
            <div className=' w-50 p-4 border border-dark rounded'>

               

                <form className='w-100 d-flex justify-content-center align-items-start flex-column gap-3'>
                    <div className="form-group w-100">
                        <label for="name" className='mb-2'>Enter Name</label>
                        <input className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            type="text" placeholder="Enter Name" />
                    </div>

                    <div className='form-group w-100'>
                        <label for="exampleInputEmail1" className='mb-2'>Email address</label>
                        <input type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Create
