import BgBook from './_components-homepage/bg-book'
import ButtonSignin from './_components-homepage/button-signin'
import LogoTitle from './_components-homepage/logo-title'

export default function Page() {
  return (
    <main className='flex relative min-h-screen w-screen justify-center bg-black max-w-max m-auto min-w-min'>
      <ButtonSignin />

      <LogoTitle />

      <BgBook
        srcImage='/bg/the-comunity-rings.svg'
        title='La comunidad del anillo'
      />

      <BgBook srcImage='/bg/two-tower.svg' title='Dos torres' />

      <BgBook srcImage='/bg/return-of-king.svg' title='El retorno del rey' />
    </main>
  )
}
