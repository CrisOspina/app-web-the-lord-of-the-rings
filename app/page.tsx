import ButtonSignin from './_components-homepage/button-signin'
import LogoTitle from './_components-homepage/logo-title'
import BgBook from './_components-homepage/bg-book'

export default function Page() {
  return (
    <div className='w-screen min-h-screen relative'>
      <div className='absolute top-40 w-full flex justify-center'>
        <LogoTitle />
        <ButtonSignin />
      </div>

      <BgBook />
    </div>
  )
}
