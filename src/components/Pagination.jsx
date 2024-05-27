import React from 'react'

const Pagination = ({ handlePage, page }) => {

  return (
    <div className="join">
    <button className="join-item btn" onClick={handlePage} value='prev'>«</button>
          <button className="join-item btn">Page {page}</button>
    <button className="join-item btn" onClick={handlePage} value='next'>»</button>
    </div>
  )
}

export default Pagination