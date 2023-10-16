import DataTable from '../components/DataTable'
import sourdough_background3 from '../assets/images/sourdough_background3.jpg'

function Dashboard() {
  return (
    <div 
      style={{ backgroundImage: `url(${ sourdough_background3 })`}} 
      className='flex  justify-left mx-auto bg-cover'
      >
    
    <div className='flex place-items-center h-screen'>
        </div>
    <div>
      <DataTable />
    </div>
    </div>
  )
}

export default Dashboard