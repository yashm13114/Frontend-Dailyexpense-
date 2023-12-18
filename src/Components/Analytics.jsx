import React from 'react'
import { ColorPicker, Progress } from 'antd'
const Analytics = ({ allTransactions }) => {
    // categories
    const categories = [
        "Education",
        "Medical",
        "Tip",
        "Project",
        "Salary",
        "Food",
        "Movie",
    ]
    // total transaction
    const totalTransaction = allTransactions.length
    const totalIncomeTransaction = allTransactions.filter(transaction => transaction.type === 'Income')
    const totalExpenseTransaction = allTransactions.filter(transaction => transaction.type === 'Expense')

    const totalIncomePercent = (totalIncomeTransaction.length / totalTransaction) * 100
    const totalExpensePercent = (totalExpenseTransaction.length / totalTransaction) * 100

    // total turnover
    const totalTurnover = allTransactions.reduce((acc, transaction) => acc + transaction.amount, 0)
    const totalIncomeTurnover = allTransactions.filter(transaction => transaction.type === 'Income').reduce((acc, transaction) => acc + transaction.amount, 0)
    const totalExpenseTurnover = allTransactions.filter(transaction => transaction.type === 'Expense').reduce((acc, transaction) => acc + transaction.amount, 0)

    const totalIncomeTurnoverPercent = (totalIncomeTurnover
        / totalTurnover) * 100
    const totalExpenseTurnoverPercent = (totalExpenseTurnover
        / totalTurnover) * 100
    return (
        <>
            <div className='grid justify-center'>
                <div className='lg:flex lg:justify-evenly inline-block justify-evenly'>
                    <div className=' '>
                        <div className='text-2xl'>
                            Total-Transaction: {totalTransaction}
                        </div><br />
                        <div>
                            <h5 className='text-green-600 text-3xl font-bold'>Income: {totalIncomeTransaction.length}</h5>
                            <h5 className='text-red-600 text-3xl font-bold mb-10'>Expense: {totalExpenseTransaction.length}</h5>
                            <Progress className='mr-10' type='circle' strokeColor={'green'} percent={totalIncomePercent.toFixed(0)} />
                            <Progress className='mr-10' type='circle' strokeColor={'red'} percent={totalExpensePercent.toFixed(0)} />
                        </div>
                        <div className='mt-10'>
                            <h4 className='text-2xl mb-6'>Category wise Income</h4>
                            {
                                categories.map(category => {
                                    const amount = allTransactions.filter(transaction => transaction.type === 'Income' && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0)
                                    return (
                                        amount > 0 && (
                                            <div>
                                                <h5>{category}</h5>
                                                <Progress
                                                    percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                                            </div>
                                        )
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className='mr-10'>
                        <div className='text-2xl'>
                            Total-Turnover: {totalTurnover}
                        </div><br />
                        <div>
                            <h5 className='text-green-600 text-3xl font-bold'>Income: {totalIncomeTurnover}</h5>
                            <h5 className='text-red-600 text-3xl font-bold mb-10'>Expense: {totalExpenseTurnover}</h5>
                            <Progress className='mr-10' type='circle' strokeColor={'green'} percent={totalIncomeTurnoverPercent.toFixed(0)} />
                            <Progress className='mr-10' type='circle' strokeColor={'red'} percent={totalExpenseTurnoverPercent.toFixed(0)} />
                        </div>
                        <div className='mt-10'>
                            <h4 className='text-2xl mb-6'>Category wise Expense</h4>
                            {
                                categories.map(category => {
                                    const amount = allTransactions.filter(transaction => transaction.type === 'Expense' && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0)
                                    return (
                                        amount > 0 && (
                                            <div>
                                                <h5>{category}</h5>
                                                <Progress
                                                    percent={((amount / totalExpenseTurnover) * 100).toFixed(0)} />
                                            </div>
                                        )
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>



                
            </div>
        </>
    )
}

export default Analytics