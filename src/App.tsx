import './sass/index.scss'

import Layout from './components/layout/Layout';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import DotLoader from 'react-spinners/DotLoader';

function App() {
  const [ loading, setLoading ] = useState<boolean>(false)

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div className='app'>{loading ? 
        <DotLoader
        className='app__spinner'
        color={"#99CCFF"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    :
      <Layout/>}
    </div>
  ) 
}

export default App
