
import getAllTransactions from '@/api/getAllTransactions';
import Card from './card';



export default async function Transactions() {
    const trnData: Promise<TransactionResult> = getAllTransactions()

    const trns = await trnData

    console.log("DCATALLOOOO " + JSON.stringify(trns, null, 3))

    const cardsData = [
        { title: 'QUANTIDADE TOTAL', description: `${trns[0].summary.totalQuantity}`, titleColor: "text-violet-400" },
        { title: 'MONTANTE TOTAL', description: `${trns[0].summary.totalAmount}`, titleColor: "text-blue-400" },
        { title: 'VALOR LIQUIDO TOTAL', description: `${trns[0].summary.totalNetAmount}`, titleColor: "text-green-400" },
        { title: 'VALOR MEDIO TOTAL', description: `${trns[0].summary.totalAverageAmount}`, titleColor: "text-orange-400" },
    ];


    const content = (
        <section>
            <div className="flex flex-wrap -mx-4">
                {cardsData.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <Card title={card.title} description={card.description} titleColor={card.titleColor} />
                    </div>
                ))}
            </div>
            <br />
        </section>
    )

    return content
}