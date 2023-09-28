"use client"

import React, { createContext, useEffect, useState } from "react"
import getAllTransactions from "@/api/getAllTransactions";

interface DataContextType {
  trns: TransactionResult
}

const DATA_DEFAULT_VALUES: DataContextType = { trns: []}

export const DataContext = createContext<DataContextType>(DATA_DEFAULT_VALUES)

export const DataProvider = ({ children }: any) => {
    const [data, setData] = useState<TransactionResult>([]);

    useEffect(() => {
      const res : any = getAllTransactions()
      setData(res)
    }, []);
  
    const contextValues: any = { trns : data }

    return <DataContext.Provider value={contextValues}>{children}</DataContext.Provider>;
}
