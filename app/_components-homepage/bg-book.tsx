import Text from '@/app/_components/text'

export default function BgBook() {
  return (
    <section className='flex'>
      <div className="bg-[url('/bg/the-comunity-rings.jpg')] w-screen min-h-screen bg-no-repeat bg-cover flex justify-end items-end">
        <Text
          as='p'
          size='2xl'
          className='font-lucida-reg text-brown-106-1 text-center w-full mb-56'>
          The Fellowship Of The Ring
        </Text>
      </div>

      <div className="hidden bg-[url('/bg/two-tower.jpg')] w-screen min-h-screen bg-no-repeat bg-cover lg:flex justify-end items-end">
        <Text
          as='p'
          size='2xl'
          className='font-lucida-reg text-brown-106-1 text-center w-full mb-64'>
          The Tow Towers
        </Text>
      </div>

      <div className="hidden bg-[url('/bg/return-of-king.jpg')] w-screen min-h-screen bg-no-repeat bg-cover md:flex justify-end items-end">
        <Text
          as='p'
          size='2xl'
          className='font-lucida-reg text-brown-106-1 text-center w-full mb-64'>
          The Return Of The King
        </Text>
      </div>
    </section>
  )
}
