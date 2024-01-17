import Links from '@/app/_components/links'
import Text from '@/app/_components/text'

import Header from '../_components/header'
import Card from './_components/card/card'

export default function Page() {
  return (
    <main>
      <Header />
      <Links />

      <Text
        className='font-harrington text-brown-106-1 !font-normal text-center my-10'
        size='4xl'>
        Characters Favorites
      </Text>

      <Card />
    </main>
  )
}
