import Image from 'next/image'
import Link from 'next/link'

import Form from './_components/form'

export default function Page() {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <div className='h-full md:h-[487px] w-full md:w-[559px] flex flex-col justify-center items-center border-[4px] border-yellow-106-2 bg-[#003b41cc] rounded-lg'>
        <Link href='/'>
          <Image
            src='/logos/logo-title.png'
            alt='logo title main'
            width={338}
            height={79}
            className='hidden md:block mb-[30px]'
          />

          <Image
            src='/logos/logo-title.png'
            alt='logo title main'
            width={214.299}
            height={50.4}
            className='block mb-[60px] md:hidden'
          />
        </Link>

        <Form />
      </div>
    </main>
  )
}
