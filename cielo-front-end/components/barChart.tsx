'use client'

import getAllTransactions from '@/api/getAllTransactions';
import React from 'react'
import { Chart } from "react-google-charts";

export default async function BarChart() {
    const trnData: Promise<TransactionResult> = getAllTransactions()

    const trns = await trnData

    const dataBase = {
        title: ["Qty total", "Mont total", "Vl total", "Vm total"],
        values: [1546, 313388.00, 301847.02, 202.71]
    };
    
    let arrayIndex = Object.keys(dataBase)
    let arrayValues = Object.values(dataBase)
    
    let data: any = []
    
    for (let i = 0; i < arrayValues[0].length; i++) {
        data[i] = arrayValues.map((item) => {
            return item[i]
        })
    }
    
    data.unshift(arrayIndex)
    
    const options = {
        title: 'TOTAIS',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { format: 'currency' },
        animation: { duration: 500, easing: 'linear', startup: true }
    }

    return (
        <section>
            <div className="p-4 border-gray-300 rounded-lg shadow-md">
                <Chart
                    chartType="ColumnChart"
                    data={data}
                    width="100%"
                    height="400px"
                    options={options}
                    legendToggle
                />
            </div>
        </section>
    )
}
