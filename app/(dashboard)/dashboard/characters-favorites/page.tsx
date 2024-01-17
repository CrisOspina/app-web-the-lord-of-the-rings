import Text from '@/app/_components/text'

import Card from './_components/card/card'
import Header from '@/app/_components/header'
import Navbar from '@/app/_components/navbar'

export default function Page() {
  return (
    <main>
      <Header />
      <Navbar />

      <Text
        className='font-harrington text-brown-106-1 !font-normal text-center my-10'
        size='4xl'>
        Characters Favorites
      </Text>

      <Card />
    </main>
  )
}
