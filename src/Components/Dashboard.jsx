
// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../App';
// import { Card } from 'antd';
// import moment from 'moment';
// import Analytics from './Analytics';

// const Dashboard = () => {
//   const { state, dispatch } = useContext(UserContext);
//   const [todayExpense, setTodayExpense] = useState(0);
//   const [last7DaysExpense, setLast7DaysExpense] = useState(0);
//   const [last30DaysExpense, setLast30DaysExpense] = useState(0);
//   const [lastYearExpense, setLastYearExpense] = useState(0);
//   const [allTransactions, setallTransactions] = useState([])
//   // Fetch expenses for today, last 7 days, last 30 days, and last year
//   const fetchExpenses = async () => {
//     try {
//       const today = moment().format('YYYY-MM-DD');
//       const last7Days = moment().subtract(7, 'days').format('YYYY-MM-DD');
//       const last30Days = moment().subtract(30, 'days').format('YYYY-MM-DD');
//       const lastYear = moment().subtract(1, 'year').format('YYYY-MM-DD');

//       const response = await fetch('http://localhost:5000/get-transaction');

//       if (response.ok) {
//         const data = await response.json();

//         const todayExpenses = data.filter(expense => moment(expense.date).isSame(today, 'day'));
//         const last7DaysExpenses = data.filter(expense => moment(expense.date).isAfter(last7Days));
//         const last30DaysExpenses = data.filter(expense => moment(expense.date).isAfter(last30Days));
//         const lastYearExpenses = data.filter(expense => moment(expense.date).isAfter(lastYear));

//         setTodayExpense(todayExpenses.reduce((total, expense) => total + expense.amount, 0));
//         setLast7DaysExpense(last7DaysExpenses.reduce((total, expense) => total + expense.amount, 0));
//         setLast30DaysExpense(last30DaysExpenses.reduce((total, expense) => total + expense.amount, 0));
//         setLastYearExpense(lastYearExpenses.reduce((total, expense) => total + expense.amount, 0));
//       } else {
//         console.error('Failed to fetch expenses');
//       }
//     } catch (error) {
//       console.error('Error fetching expenses:', error);
//     }
//   };
//   const getAllTransactions = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'))
//       const res = await fetch('http://localhost:5000/get-transaction', {
//         method: 'GET',
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         }
//       }, { userid: user._id })
//       const data = await res.json();
//       console.log(data)
//       setallTransactions(data)


//       if (res.status === 200) {
//         console.log("successful")

//       } else {
//         const error = new Error(res.error);
//         throw error;
//       }
//     } catch (err) {
//       console.log("err " + err)



//     }

//   }
//   useEffect(() => {
//     getAllTransactions();

//   }, [])


//   useEffect(() => {
//     fetchExpenses();
//   }, []); // Fetch expenses on component mount

//   return (
//     <>

//       <div className='container mx-auto p-10'>
//         <div className='lg:pl-72  lg:pr-72 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
//           <Card title='Today&apos;s Expense' className='bg-gray-100 rounded-md' bordered={false}>
//             <p className='text-lg font-semibold mb-2'>Total: ₹{todayExpense}</p>
//             {/* Additional details or charts */}
//           </Card>
//           <Card title='Last 7 days Expense' className='bg-gray-100 rounded-md' bordered={false}>
//             <p className='text-lg font-semibold mb-2'>Total: ₹{last7DaysExpense}</p>
//             {/* Additional details or charts */}
//           </Card>
//         </div>

//         <div className='lg:pl-72  lg:pr-72 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4'>
//           <Card title='Last 30 days Expense' className='bg-gray-100 rounded-md' bordered={false}>
//             <p className='text-lg font-semibold mb-2'>Total: ₹{last30DaysExpense}</p>
//             {/* Additional details or charts */}
//           </Card>
//           <Card title='Last Year Expense' className='bg-gray-100 rounded-md' bordered={false}>
//             <p className='text-lg font-semibold mb-2'>Total: ₹{lastYearExpense}</p>
//             {/* Additional details or charts */}
//           </Card>
//         </div>
//         <div className=' mt-14 grid justify-center'>
//           <Analytics allTransactions={allTransactions} />


//         </div>

//       </div>

//     </>
//   );
// };

// export default Dashboard;



import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { Card } from 'antd';
import moment from 'moment';
import Analytics from './Analytics';
import ReactApexChart from 'react-apexcharts';
const Dashboard = () => {
  const { state, dispatch } = useContext(UserContext);
  const [todayExpense, setTodayExpense] = useState(0);
  const [last7DaysExpense, setLast7DaysExpense] = useState(0);
  const [last30DaysExpense, setLast30DaysExpense] = useState(0);
  const [thisYearExpense, setThisYearExpense] = useState(0);
  const [allTransactions, setallTransactions] = useState([])
  const [income, setIncome] = useState(0);
  // Fetch expenses for today, last 7 days, last 30 days, and this year
  const fetchExpenses = async () => {
    try {
      const today = moment().format('YYYY-MM-DD');
      const last7Days = moment().subtract(7, 'days').format('YYYY-MM-DD');
      const last30Days = moment().subtract(30, 'days').format('YYYY-MM-DD');
      const thisYearStart = moment().startOf('year').format('YYYY-MM-DD');

      const response = await fetch('http://localhost:5000/get-transaction');

      if (response.ok) {
        const data = await response.json();

        const todayExpenses = data.filter(expense => moment(expense.date).isSame(today, 'day') && expense.type === 'Expense');
        const last7DaysExpenses = data.filter(expense => moment(expense.date).isAfter(last7Days) && expense.type === 'Expense');
        const last30DaysExpenses = data.filter(expense => moment(expense.date).isAfter(last30Days) && expense.type === 'Expense');
        const thisYearExpenses = data.filter(expense => moment(expense.date).isAfter(thisYearStart) && expense.type === 'Expense');

        setTodayExpense(todayExpenses.reduce((total, expense) => total + expense.amount, 0));
        setLast7DaysExpense(last7DaysExpenses.reduce((total, expense) => total + expense.amount, 0));
        setLast30DaysExpense(last30DaysExpenses.reduce((total, expense) => total + expense.amount, 0));
        setThisYearExpense(thisYearExpenses.reduce((total, expense) => total + expense.amount, 0));
      } else {
        console.error('Failed to fetch expenses');
      }
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const res = await fetch('http://localhost:5000/get-transaction', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }, { userid: user._id })
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
      console.log("err " + err)
    }
  }

  useEffect(() => {
    getAllTransactions();
    fetchExpenses();
  }, []); // Fetch expenses on component mount
  const filteredIncomeData = allTransactions
    .filter(transaction => moment(transaction.date).isAfter(thisYearExpense) && transaction.type === 'Income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const chartOptions = {
    labels: ['Expenses', 'Income'],
    colors: ['#f60d0d', '#16c152'], // Colors for Expenses and Income
  };

  const chartData = [thisYearExpense, filteredIncomeData];

  return (
    <>
      <div className='container mx-auto p-10'>
        <div className='lg:pl-72 lg:pr-72 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <Card title="Today's Expense" className='bg-gray-100 hover:bg-gray-200 rounded-md' bordered={false}>
            <p className='text-lg font-semibold mb-2'>Total: ₹{todayExpense}</p>
          </Card>
          <Card title='Last 7 days Expense' className='bg-gray-100 hover:bg-gray-200 rounded-md' bordered={false}>
            <p className='text-lg font-semibold mb-2'>Total: ₹{last7DaysExpense}</p>
          </Card>
        </div>

        <div className='lg:pl-72 lg:pr-72 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4'>
          <Card title='Last 30 days Expense' className='bg-gray-100 hover:bg-gray-200 rounded-md' bordered={false}>
            <p className='text-lg font-semibold mb-2'>Total: ₹{last30DaysExpense}</p>
          </Card>
          <Card title='This Year Expense' className='bg-gray-100 hover:bg-gray-200 rounded-md' bordered={false}>
            <p className='text-lg font-semibold mb-2'>Total: ₹{thisYearExpense}</p>
          </Card>
        </div>
        <div className='container lg:pl-52 lg:pr-44 pl-0 pr-0 mt-14'>
          <div className=' '>
            <Card title='Income and Expenses Chart' className='bg-gray-100 rounded-lg' bordered={false}>
              <ReactApexChart options={chartOptions} series={chartData} type='donut' height={350} />
            </Card>
          </div>
        </div>



        <div className=' mt-14 grid justify-center'>
          <Analytics allTransactions={allTransactions} />
        </div>
      </div>
      

       

    </>
  );
};

export default Dashboard;

