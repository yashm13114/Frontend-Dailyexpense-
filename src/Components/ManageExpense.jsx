import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/globalContext';
import {Table} from 'antd'
import axios from 'axios';
const ManageExpense = () => {
    const [allTransactions, setallTransactions] = useState([])
    const getAllTransactions = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await fetch('http://localhost:5000/get-transaction', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            },{userid: user._id})
            const data = await res.json();
            console.log(data)
            setallTransactions(data)
         

            if (res.status === 200) {
                console.log("successful")

            } else {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log("err    "+err)



        }

    }
    useEffect(() => {
        getAllTransactions();

    }, [])
    const columns = [
        {
            title: 'date',
            dataIndex: 'date',
        },
        {
            title: 'amount',
            dataIndex: 'amount'
        },
        {
            title: 'type',
            dataIndex: 'type',
        
        },
        {
            title: 'category',
            dataIndex: 'category',
        
        },
        {
            title: 'reference',
            dataIndex: 'reference',
        
        },
        {
            title: 'description',
            dataIndex: 'description',
        
        }
    ];




    return (
        <>
        <div className='lg:w-full sm:w-0 lg:flex lg:justify-center  mt-10'>
        <Table dataSource={allTransactions} columns={columns} />

        </div>
          

            {/* <div className="flex flex-col mt-20 lg:w-3/4 w-4/5 lg:ml-72 ml-10">

                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <form action="" method="GET">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Sr no.</th>
                                        <th scope="col" className="px-6 py-4">Expense Item</th>
                                        <th scope="col" className="px-6 py-4">Expense Cost(in ₹)</th>
                                        <th scope="col" className="px-6 py-4">Expense Date</th>
                                        <th scope="col" className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium"></td>
                                        <td className="whitespace-nowrap px-6 py-4">{allTransactions.title}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{allTransactions.amount}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{allTransactions.date}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-red-600 cursor-pointer">Delete</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        </form>
                    </div>
                </div>





            </div> */}
        </>
    )
}

export default ManageExpense