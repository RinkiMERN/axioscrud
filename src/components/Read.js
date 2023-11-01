import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {

    const [data, setData] = useState([])
    let getData = () => {
        axios.get(
            "https://654269b7ad8044116ed355c0.mockapi.io/axioscrud"
        ).then((res) => setData(res.data))
    }

    let handleDelete =(id)=>{
        axios.delete(`https://654269b7ad8044116ed355c0.mockapi.io/axioscrud/${id}`)
        .then(()=>{
            getData()
        })
    }

    let setToLocalStorage = (id, name, email)=>{
        localStorage.setItem("id", id)
        localStorage.setItem("name",name)
        localStorage.setItem("email", email)
    }
    
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="d-flex justify-content-center align-items-center w-100 mt-5">
            <table className="table w-50 table-bordered">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            data.map((value) => {
                                return (
                                    <>
                                     <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>
                                            <Link to="/update">
                                            <button type="submit" className='btn btn-primary' onClick={()=> setToLocalStorage(
                                                value.id,
                                                value.name,
                                                value.email
                                            )}>Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button type="submit" className='btn btn-primary' onClick={()=> handleDelete(value.id)}>Delete</button>
                                        </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    

                </tbody>
            </table>
        </div>
    )
}

export default Read
