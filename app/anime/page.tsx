"use client";

import FetchQuotes from "@/components/FetchQuotes";
import { useState, useEffect } from "react";

const Item = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { name } = searchParams;

  const animeName = name ? name : ''

  const data = FetchQuotes(animeName, 1);

  return (
    <div className='px-8 py-16 sm:p-16 flex flex-col gap-10 w-full sm:max-w-7xl mx-auto'>
      <h2 className='text-3xl text-white font-bold'> {name ? `Quotes from ${name}` : 'Random Quotes'} </h2>
      <div className="columns-1 md:columns-2xs lg:columns-3 xl:columns-4 space-y-4">
        {data}
      </div>
    </div>
  );
};

export default Item;
