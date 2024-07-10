import React from 'react'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/16/solid'


const Delete = ({onDelete}) => {
  return (
    <div>
      <ArchiveBoxXMarkIcon className='delete-logo' onClick={onDelete}/>
  </div>
  )
}

export default Delete



