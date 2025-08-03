const LibraryManagementSystem = () => {
  return (
    <div className='text-center mt-40 px-4 lg:px-24'>
      <button disabled className='mb-4 text-white text-2xl font-bold border-b-2 rounded bg-blue-700'>Library Management System</button>
        <div className='mt-20 mb-5 text-2xl font-semibold'>
        <p className='mb-10 text-2xl font-semibold'>We are Working on it but here are what to expact:</p>
        <ol className='flex flex-col text-2xl items-start list-decimal space-y-3 mb-10'>
            <li>Circulation Section</li>
            <li>Registeration Of Users (Staff / Student)</li>
            <li>Lending (Charging & Discharging)</li>
            <li>Over Due Notice Via SMS</li>
            <li>Book Tracking</li>
            <li>And More</li>
       </ol>
       </div>
    </div>
  )
}

export default LibraryManagementSystem;