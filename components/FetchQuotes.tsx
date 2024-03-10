"use client";

import Image from "next/image";
import { useQuery } from "react-query";
import QuoteCard from "./QuoteCard";

export type QuoteProps = {
  id: number;
  quote: string;
  anime: string;
  character: string;
};

//Fetch quotes function
const getQuotes = (name: string, page: number) => {
  if (name !== "") {
    const quotes = fetch(
      `https://animechan.xyz/api/quotes/anime?title=${name}&page=${page}`
    ).then((resp) => resp.json());

    return quotes;
  } else {
    const quotes = fetch(`https://animechan.xyz/api/quotes?page=${page}`).then(
      (resp) => resp.json()
    );

    return quotes;
  }
};

export default function FetchQuotes(name: string, page: number) {
  const queryKey = ["quotes"];
  const { data, isLoading, error } = useQuery(
    queryKey,
    () => getQuotes(name, page),
    {
      refetchOnWindowFocus: false,
      cacheTime: 0
    }
  );

  if (isLoading) return <div className="flex justify-center items-center w-full">
    <Image
            src="/spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
  </div>;

  if (error) return <div> A error has detected </div>;

  return data.length > 0 ? data.map((quote: QuoteProps) => (
    <QuoteCard key={quote.id} item={quote} />
  )) : (
    <div className="w-full block text-white"> 
      No Quotes available for this anime! 
    </div>
  )
}
