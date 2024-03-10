"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchAnimes } from "@/app/action";

type AnimeCard = JSX.Element

let page = 2;

const LoaderMore = () => {
  const [data, setData] = useState<AnimeCard[]>([]);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchAnimes(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }

  }, [inView, data]);

  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default LoaderMore;
