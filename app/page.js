import Image from 'next/image'
import data from '../components/Location'
import SmallCard from '@/components/SmallCard'
import MediumCard from '@/components/MediumCard'
import mediumData from '@/components/MediumLocation'
import LargeCard from '@/components/LargeCard'

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold'>Explore destinos famosos</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data?.map(({img, distance, location, id}) => (
          <SmallCard 
          key={id}
          img = {img}
          distance = {distance}
          location= {location}
          />
      ))}
    </div>
      </section>

      <section>
        <h2 className='text-4xl font-semibold py-8'>Experimente</h2>
          
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-2 -ml-3'>
        {mediumData?.map(({img, title, id}) => (
          <MediumCard 
          key={id}
          img = {img}
          title = {title}
          />
      ))}
        </div>
      </section>

      <LargeCard
        img = "https://links.papareact.com/4cj"
        title = "O melhor ao ar livre"
        description = "Locais preparados pra você."
        buttonText = "Inspire-se"
      />

    </main>
  )
}

