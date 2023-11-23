import React, { useState } from 'react'
import axios from 'axios';
const Changeexpense = () => {
    const [expense, setExpense] = useState({
        title: "", amount: "", date: ""
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
        const { title, amount, date } = expense


        if (!title || !amount || !date) {
            alert("Please fill all the fields")

        } else {


            const res = await fetch('http://localhost:5000/add-expense', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title, amount, date
                })
            })
            const user = JSON.parse(localStorage.getItem('user'))
            const data = await res.json()

            alert("inserted"+data)

        }
    }
    const submitExpense = async(value)=>{
        try{
            const user = JSON.parse(localStorage.setItem('expense'))
            await axios.post('http://localhost:5000/add-expense',{...value,userid: user._id})
            alert("inserted"+data)
            setExpense(false)
      
       
         }catch(err){
            console.log('error '+err)
         }
    }


    return (
        <>
            <div className='lg:ml-96 ml-14'>
                <h1 className='text-3xl pb-5 mt-10'>Expenses</h1>
                <hr />
                <form action="" className='lg:ml-10 md:ml-60 lg:mr-0 md:mr-0 lg:mt-5 md:mt-24 mt-5  lg:inline-block lg:justify-normal md:inline-block md:justify-center  justify-center ml-5 mr-10'>
                    <label htmlFor="" className='lg:text-2xl md:text-4xl  text-2xl font-semibold lg:pt-2 lg:pr-96 '>Date of expense</label><br />

                    <input
                        type="date"
                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleHtmlformControlInput3"
                        value={expense.date}
                        name='date'
                        onChange={handleInputs}
                        placeholder="Email address" /><br />


                    <label htmlFor="" className='lg:text-2xl md:text-4xl  text-2xl font-semibold'>Item</label><br />
                    <input
                        type="text"
                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleHtmlformControlInput3"
                        value={expense.title}
                        name='title'
                        onChange={handleInputs}
                        placeholder="Enter cost" /><br />
                    <label htmlFor="" className='lg:text-2xl md:text-4xl  text-2xl font-semibold'>Cost of Item</label><br />
                    <input
                        type="text"
                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleHtmlformControlInput3"
                        value={expense.amount}
                        name='amount'
                        onChange={handleInputs}
                        placeholder="Enter cost" /><br />



                    <button onClick={postData} type="submit" className='lg:text-2xl md:text-4xl  text-2xl lg:ml-0 ml-14 bg-black text-white pl-6 pr-6 pt-1 pb-1 rounded-md hover:rounded-full flex justify-center'>Add</button>
                </form>
            </div>


        </>
    )
}

export default Changeexpense