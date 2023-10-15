import React from 'react'

const Box = ({no}) => {
  return (
    <div className='flex animate-move'>
    {(()=>{
    let td = [];
    for (let i = 1; i <= no; i++)
    {
        td.push(<div className=' h-2 w-2 bg-green m-[2px]'></div>)}
        return td;})()}
</div>
  )
}

export default Box