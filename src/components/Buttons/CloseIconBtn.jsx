import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const CloseIconBtn = ({ handleClose }) => <IoCloseOutline onClick={handleClose} className='text-4xl p-1 rounded-full hover:bg-purple-200 cursor-pointer trasition duration-300 absolute top-3 right-3' />

export default CloseIconBtn