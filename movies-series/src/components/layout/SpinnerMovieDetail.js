import React from 'react'

function SpinnerMovieDetail() {

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="ssc col-md-5 mb-5 pl-0">
                <div className="ssc-wrapper ssc-card">
                    <div className="d-flex justify-content-center">
                    <div className="w-100">
                        <div className="ssc-square mb w-auto" style={{height: '550px'}}></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="ssc col-md-7 mb-5">
            <div className="ssc-square mb mb-5" style={{height: '50px'}}></div>
                <div className="ssc-wrapper h-auto ssc-card">
                    <div className="d-flex justify-content-center">
                      <div className="w-100">
                          <div className="ssc-square mb" style={{height: '30px'}}></div>
                          <div className="ssc-square mb" style={{height: '30px'}}></div>
                          <div className="ssc-square mb" style={{height: '30px'}}></div>
                          <div className="ssc-square mb" style={{height: '30px'}}></div>
                          <div className="ssc-square mb" style={{height: '30px'}}></div>
                          <div className="ssc-square mb" style={{height: '30px'}}></div>
                          <div className="ssc-square mb" style={{height: '30px'}}></div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="ssc col-md-12 mb-5 pl-0">
                <div className="ssc-wrapper h-auto ssc-card">
                    <div className="d-flex justify-content-center">
                      <div className="w-100">
                          <div className="ssc-square w-10 mb" style={{height: '30px'}}></div>
                          <div className="ssc-square mb" style={{height: '30px'}}></div>
                          <div className="d-flex flex-row">
                            <div className="ssc-square w-20 mr" style={{height: '45px'}}></div>
                            <div className="ssc-square w-20 ml" style={{height: '45px'}}></div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SpinnerMovieDetail