import ButtonBack from '@/app/_components/button-back'

export default function Page({ params }: { params: { id: string[] } }) {
  return (
    <main>
      <ButtonBack>Volver</ButtonBack>
      <h1 className='my-4'>Detalle personaje: {JSON.stringify(params.id)}</h1>
    </main>
  )
}
