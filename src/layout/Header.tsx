
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Header = () => {
  const [progress,setProgress]=useState(0)
  const open=()=>{
    window.location.reload();
  }
  return (
    <>
       <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      />
    <div className="header">
      <div className="header-title">
        <h1 onClick={open}>GITHUNT</h1>
      </div>
    </div>
    </>
  )
}

export default Header
