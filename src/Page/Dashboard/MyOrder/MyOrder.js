import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../Shared/UseAuth/UseAuth';

const MyOrder = () => {
    const { user } = UseAuth()
    const email = user.email
    const { isLoading, data, error } = useQuery({
        queryKey: ["product", email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/order?email=${email}`)
            const data = await res.json()
            return data
        }
    })
    console.log(data)
    return (
        <div>
            {
                isLoading ? <progress className="progress w-56"></progress> : <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <tbody>
                           {
                            data.map(order => (
                                <tr key={order._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.name}</div>
                                                <div className="text-sm opacity-50">{order.price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {order.userName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{order.userNumber}</span>
                                    </td>
                                <td>
                                <button className="btn btn-ghost btn-xs">Cancle</button>
                                </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Pay</button>
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

export default MyOrder;