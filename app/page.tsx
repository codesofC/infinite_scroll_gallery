
import LoaderMore from '@/components/LoaderMore'
import { fetchAnimes } from './action'

export default async function Home() {

  const data = await fetchAnimes(1)

  return (
    <main className='px-8 py-16 sm:p-16 flex flex-col gap-10 w-full sm:max-w-7xl mx-auto'>
      <h2 className='text-3xl text-white font-bold'> Explore Anime's Quotes </h2>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center'>
        {data}
      </section>
      <LoaderMore />
    </main>
  )
}
