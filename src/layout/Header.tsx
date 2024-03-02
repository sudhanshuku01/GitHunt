
import { useState } from 'react'
// import githunt_IMG from '../Images/githunt.png'
import LoadingBar from 'react-top-loading-bar'

const Header = () => {
  const [progress,setProgress]=useState(0)
  return (
    <>
       <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      />
    <div className="header">
      <div className="header-title">
        {/* <img src={githunt_IMG} alt="githunt" /> */}
        <h1>GITHUNT</h1>
      </div>
    </div>
    </>
  )
}

export default Header
