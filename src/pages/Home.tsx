import Background from '../assets/images/sourdough5.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h1 className='px-20 py-10 bg-white bg-opacity-50 text-yellow-900 text-8xl text-center font-mono
          rounded'>Welcome to <br></br> Rise & Sourdough</h1>
        </div>
    </div>
  )
}

export default Home