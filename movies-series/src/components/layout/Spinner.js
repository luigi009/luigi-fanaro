import React from 'react'
// import spinner from './spinner.gif'

function Spinner() {

  let loadingCard = [];

  for( var i = 0; i < 4; i++) {
    loadingCard.push(
      <div className="ssc col-md-3 mb-5">
      <div className="ssc-wrapper ssc-card">
        <div className="d-flex justify-content-center">
          <div className="w-100">
            <div className="ssc-square mb" style={{height: '200px'}}></div>
            <div className="ssc-square mb" style={{height: '30px'}}></div>
            <div className="ssc-square mb" style={{height: '35px'}}></div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <>
      {/* <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      /> */}

      <div className="d-flex flex-row">{loadingCard}</div>
    </>
  )
}

export default Spinner
