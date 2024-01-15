export default function Page() {
  return (
    <main>
      <h1 className='w-full text-center'>Ingresar</h1>
      <form>
        <input type='text' placeholder='Usuario' />
        <input type='password' placeholder='Contraseña' />
        <button type='submit'>Ingresar</button>
      </form>
    </main>
  )
}
