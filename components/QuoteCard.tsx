import { QuoteProps } from "./FetchQuotes"



const QuoteCard = ({ item }: { item: QuoteProps}) => {
  return (
    <div className="flex flex-col items-end gap-8 px-6 py-4 bg-black-500 rounded-lg shadow-md border">
        <p className="w-full flex flex-wrap italic">
            "{item.quote}"
        </p>
        <span className="text-md font-bold">
            {item.character}
        </span>
    </div>
  )
}

export default QuoteCard