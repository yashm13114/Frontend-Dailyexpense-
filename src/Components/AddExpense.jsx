import axios from 'axios';
import React, { useState } from 'react'
const AddExpense = () => {
    const [expense, setExpense] = useState({
        amount: "", type: "", category: "", reference: "", description: "", date: ""
    })

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setExpense({ ...expense, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();

        const { amount, type, category, reference, description, date } = expense


        if (!amount || !type || !category || !reference || !description || !date) {
            alert("Please fill all the fields")

        } else {
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await fetch('http://localhost:5000/add-transaction', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount, type, category, reference, description, date
                }),

            }, { ...e, userid: user._id })

            const data = await res.json()

            alert("inserted" + data)
            toast.success("Transsaction Added Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })

        }
    }
    // const handleSubmit = async(values) => {
    //    try {
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     await axios.post('http://localhost:5000/add-transaction',{...values,userid:user._id})
    //     alert("inserted")

    //    } catch (error) {
    //     console.log("err  "+error)
    //     alert("not inserted")
    //    }
    // }
    return (
        <>
            <section>
                <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                        <div className="flex flex-col">
                            <div>
                                <h2 className="flex text-4xl text-black">Add Your Expense/Income</h2>
                            </div>
                        </div>
                        <form method='post' onSubmit={postData}>

                            <div className="mt-4 space-y-6">
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Amount(₹)   </label>
                                    <input value={expense.amount} onChange={handleInputs} type="text" placeholder="" name='amount' className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Type   </label>
                                    <select value={expense.type} onChange={handleInputs} name='type' className="bg-gray-100 border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
                                        <option value="">--select--</option>
                                        <option value="Expense">Expense</option>
                                        <option value="Income">Income</option>
                                    </select>
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Category   </label>
                                    <select value={expense.category} onChange={handleInputs} name='category' className="bg-gray-100 border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
                                        <option value="">--select--</option>
                                        <option value="Education">Education</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Tip">Tip</option>
                                        <option value="Project">Project</option>
                                        <option value="Salary">Salary</option>
                                        <option value="Food">Food</option>
                                        <option value="Movie">Movie</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Reference  </label>
                                    <input value={expense.reference} onChange={handleInputs} name='reference' type="text" placeholder="" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600">Description  </label>
                                    <input value={expense.description} onChange={handleInputs} name='description' type="text" placeholder="" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Date  </label>
                                    <input value={expense.date} onChange={handleInputs} name='date' type="date" placeholder="" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>

                                <div className="col-span-full">
                                    <button type="submit" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Submit your request   </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddExpense


// import React, { useState } from 'react';

// const AddExpense = () => {
//   const [expense, setExpense] = useState({
//     amount: '',
//     type: '',
//     category: '',
//     reference: '',
//     description: '',
//     date: '',
//     currency: 'INR', // Default currency is INR
//   });

//   let name, value;

//   const handleInputs = (e) => {
//     name = e.target.name;
//     value = e.target.value;

//     setExpense({ ...expense, [name]: value });
//   };

//   const postData = async (e) => {
//     e.preventDefault();

//     const { amount, type, category, reference, description, date, currency } = expense;

//     if (!amount || !type || !category || !reference || !description || !date || !currency) {
//       alert('Please fill all the fields');
//     } else {
//       const user = JSON.parse(localStorage.getItem('user'));
//       const res = await fetch('http://localhost:5000/add-transaction', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount,
//           type,
//           category,
//           reference,
//           description,
//           date,
//           currency,
//         }),
//       });

//       const data = await res.json();

//       alert('Inserted ' + data);
//     }
//   };

//   return (
//     <>
//       <section>
//         <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
//           <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
//             <div className="flex flex-col">
//               <div>
//                 <h2 className="flex text-4xl text-black">Add Your Expense/Income</h2>
//               </div>
//             </div>
//             <form method="post" onSubmit={postData}>
//               <div className="mt-4 space-y-6">
//                 {/* ... other form fields ... */}
//                 <div className="col-span-full">
//                   <label className="block mb-3 text-sm font-medium text-gray-600"> Amount(₹) </label>
//                   <div className="flex items-center space-x-2">
//                     <input
//                       value={expense.amount}
//                       onChange={handleInputs}
//                       type="text"
//                       placeholder=""
//                       name="amount"
//                       className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
//                     />
//                     <select
//                       value={expense.currency}
//                       onChange={handleInputs}
//                       name="currency"
//                       className="bg-gray-100 border-0 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//                     >
//                       <option value="INR">₹ (INR)</option>
//                       <option value="USD">$ (USD)</option>
//                       <option value="EUR">€ (EUR)</option>
//                       {/* Add more currencies as needed */}
//                     </select>
//                   </div>
//                 </div>
//                 {/* ... other form fields ... */}
//                 <div className="col-span-full">
//                   <button
//                     type="submit"
//                     className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
//                   >
//                     Submit your request
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AddExpense;
