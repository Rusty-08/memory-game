import Atropos from "atropos/react"

/* eslint-disable react/prop-types */
export default function Card({ entry, handleClick }) {
  return (
    <div
      key="front"
      onClick={() => {
        handleClick(entry)
      }}>
      <Atropos
        shadow={false}
        activeOffset={30}
        className='cursor-pointer'
      >
        <div className="md:w-60 md:h-80 w-36 h-48 rounded-lg overflow-hidden">
          <img src={entry.image} className='h-full w-full' />
        </div>
      </Atropos>
    </div>
  )
}
