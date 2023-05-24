import React from 'react'
import { Link } from 'react-router-dom'

function RequestForm() {
  return (
    <>
    <div className="requestPageBtn">
        <button>
            <Link to="/Contact">Request a quote</Link>
        </button>
    </div>
    </>
  )
}

export default RequestForm