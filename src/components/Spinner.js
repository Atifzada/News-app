
import loading from './loading.gif'

const Spinner =()=> {
  
    return (
      <div className='text-center' >
        <img src={loading} alt="loading" />
      </div>
    )
  }


export default Spinner


// style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}