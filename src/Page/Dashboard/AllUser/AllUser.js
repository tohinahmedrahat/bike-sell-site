import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllUser = () => {
    const { isLoading, data,refetch } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/alluser`)
            const data = await res.json()
            return data
        }
    })
    const deleteUser = id => {
        fetch(`http://localhost:5000/user/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast("your product delet succesfully")
                    refetch()
                }
            })
    }
    const updateUser = id => {
        fetch(`http://localhost:5000/user/${id}`,{
            method:"PUT"
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast("your Verifyed succesfully")
                refetch()
            }
        })
    }
    return (
        <div>
            {
                isLoading ? <progress className="progress w-56"></progress> : <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <tbody>
                           {
                            data.map(user => (
                                <tr key={user._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.emali}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.userName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{user.role}</span>
                                    </td>
                                <td>
                                <button onClick={()=>updateUser(user._id)} className="btn btn-ghost btn-xs">Verifyed</button>
                                </td>
                                    <th>
                                        <button onClick={()=> deleteUser(user._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            ))
                           }     
                            </tbody>
                        </table>
                    </div>
                </div>
            } 
        </div>
    );
};

export default AllUser;