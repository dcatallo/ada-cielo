import BarChart from "@/components/barChart"
import { PieChart } from "@/components/pieChart"
import Transactions from "@/components/transactions"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-10">
      <Transactions />
      <div className="flex flex-grow space-x-60 w-full justify-center">
        <BarChart />
        <PieChart />
      </div>
    </main>
  )
}
