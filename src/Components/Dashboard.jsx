import React, { useContext } from 'react'
import { UserContext } from '../App';
const Dashboard = () => {
  const { state, dispatch } = useContext(UserContext)
  return (
    <>
      <div className=' md:items-center '>
        <h1 className=' text-4xl mt-10 lg:ml-96 ml-14'>Dashboard</h1>
        <div className=''>
          <div className='mt-10 lg:flex md:inline-block  inline-block lg:justify-evenly md:justify-center justify-center   lg:ml-80 ml-14'>
            <div className='drop-shadow-2xl text-2xl'>

              <div
                className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  Today's Expense
                </div>
                <div className="p-6">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    hello
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">

                  </p>

                </div>

              </div>

            </div>
            <div className='drop-shadow-2xl text-2xl lg:mt-0 mt-10'>

              <div
                className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  Yesterday's Expense
                </div>
                <div className="p-6">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    hello
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">

                  </p>

                </div>

              </div>

            </div>
            <div className='drop-shadow-2xl text-2xl lg:mt-0 mt-10'>

              <div
                className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  Last 7 day's Expense
                </div>
                <div className="p-6">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    hello
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">

                  </p>

                </div>

              </div>

            </div>
            <div className='drop-shadow-2xl text-2xl lg:mt-0 mt-10'>

              <div
                className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  Last 30 day's Expense
                </div>
                <div className="p-6">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    hello
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">

                  </p>

                </div>

              </div>

            </div>



          </div>

        </div>

      </div>
    </>

  )
}

export default Dashboard