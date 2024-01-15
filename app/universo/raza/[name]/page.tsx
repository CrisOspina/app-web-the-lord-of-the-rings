import ButtonBack from '@/app/_components/button-back'
import ShowDetail from '@/app/_components/show-detail'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <ButtonBack>Volver</ButtonBack>
      <h1 className='my-4'>Raza: {params.id}</h1>
      <p>Listado de personajes</p>

      <ShowDetail />
    </main>
  )
}
