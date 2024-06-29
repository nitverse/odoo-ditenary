import React from 'react'

type Props = {}

const Unauthorized = (props: Props) => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
  <h1 className="uppercase tracking-widest text-gray-500">401 | Unauthorized</h1>
</div>

  )
}

export default Unauthorized;