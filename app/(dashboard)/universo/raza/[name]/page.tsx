import Table from './_components/table/table'

export default function Page({ params }: { params: { name: string } }) {
  return (
    <main>
      <h1 className='my-4'>Raza: {params.name}</h1>
      <p>Listado de personajes de la raza {params.name}</p>

      <Table race={params.name} />
    </main>
  )
}
