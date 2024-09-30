import React from 'react'

export default function YoutubeIcon({blockSize, href, className}) {
  return (
    <div className={`${blockSize} flex justify-center items-center`} onClick={() => {window.location.href = href}}>
      <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" width="31" height="23" viewBox="0 0 31 23">
        <g clipPath="url(#clip0_6469_13989)">
          <path d="M29.3693 3.44194C29.0284 2.09355 28.0057 1.02903 26.7102 0.656452C24.375 0 15 0 15 0C15 0 5.625 0 3.27273 0.656452C1.97727 1.01129 0.971591 2.07581 0.613636 3.44194C0 5.89032 0 11 0 11C0 11 0 16.1097 0.630682 18.5581C0.971591 19.9065 1.99432 20.971 3.28977 21.3435C5.625 22 15 22 15 22C15 22 24.375 22 26.7273 21.3435C28.0227 20.9887 29.0284 19.9242 29.3864 18.5581C30 16.1097 30 11 30 11C30 11 30 5.89032 29.3693 3.44194Z" />
          <path d="M11.9316 15.6483V6.35156L19.7725 10.9999L11.9316 15.6483Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_6469_13989">
          <rect width="30" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
