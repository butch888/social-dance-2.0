import React from 'react'

export default function FbIcon({className, blockSize, href}) {
  return (
    <div className={`${blockSize} flex justify-center items-center`} onClick={() => {window.location.href = href}}>
      <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
        <path fillRule="evenodd" clipRule="evenodd" d="M14 0C21.7328 0 28 6.26719 28 14C28 20.9891 22.8813 26.7805 16.1875 27.8305V18.0469H19.4496L20.0703 14H16.1875V11.375C16.1875 10.2676 16.7289 9.1875 18.468 9.1875H20.2344V5.74219C20.2344 5.74219 18.632 5.46875 17.1008 5.46875C13.9016 5.46875 11.8125 7.40742 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8305C5.11875 26.7805 0 20.9891 0 14C0 6.26719 6.26719 0 14 0Z"/>
      </svg>
    </div>
  )
}
