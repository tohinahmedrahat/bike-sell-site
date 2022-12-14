import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAuth from '../../../Shared/UseAuth/UseAuth';
import { useQuery } from '@tanstack/react-query'


const Dashboard = () => {
    const {user} = UseAuth()
    const {data} = useQuery({
        queryKey:["user",user.email],
        queryFn: async () => {
            const res = await fetch(`https://service-server-tohinahmedrahat.vercel.app/user?email=${user.email}`)
            const data = await res.json()
            return data
          }
    })
 
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            data?.role === "admin" ? <><li><Link to="/dashboard/addcategory">Add Category</Link></li><li><Link to="/dashboard/alluser">All user</Link></li></>:""
                        }
                        
                        {
                            data?.role === "seller" ? <> <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                            <li><Link to="/dashboard/myproduct">My Product</Link></li></>:""
                        }
                        {
                           data?.role === "buyer"? <li><Link to="/dashboard/myorder">My Order</Link></li>:""
                        }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;