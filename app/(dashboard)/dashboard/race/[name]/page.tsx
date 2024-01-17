import Table from './_components/table/table'

export default function Page({ params }: { params: { name: string } }) {
  return (
    <main className='px-4 lg:px-40'>
      <Table race={params.name} />
    </main>
  )
}
