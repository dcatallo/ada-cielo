'use client'

import getAllTransactions from "@/api/getAllTransactions";
import React, { useContext } from "react";
import { Chart } from "react-google-charts";


export const options = {
    title: "TOTAIS",
    colors: ["violet", "blue", "green", "orange"]
};

export async function PieChart() {
    const trnData: Promise<TransactionResult> = getAllTransactions()

    const trns = await trnData

    const data = [
        ["Task", "valores totais"],
        ["Qty total", `${trns[0].summary.totalQuantity}`],
        ["Mont total", `${trns[0].summary.totalAmount}`],
        ["Vl total", `${trns[0].summary.totalNetAmount}`],
        ["Vm total", `${trns[0].summary.totalAverageAmount}`],
    ];

    console.log("DCATALLO " + JSON.stringify(data, null, 0))
    
    if (!data) {
        return <div>Loading...</div>;
    } 
       
    return (
        <section>
            <div className="p-4 border-gray-300 rounded-lg shadow-md w[300px]">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
        </section>
    );
}