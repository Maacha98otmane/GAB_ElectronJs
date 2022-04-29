import React from 'react'

const Login = () => {
  return (
    <>
    <nav className="w-full border-b">
    <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-center">
      <div aria-label="Home. logo" role="img">
        <img className="w-8 md:w-36" src="https://i.ibb.co/hdWRm46/1j-oj-FVDOMk-X9-Wytexe43-D6khv6-Fp-RNOm-Rn-Iw-Xs1-M3-EMo-AJtli-Utg-PZq8vk.png" alt="logo" />
      </div>
      <div>
        <button onclick="toggleMenu(true)" className="sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round">
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <line x1="4" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="20" y2="16"></line>
          </svg>
        </button>
        <div id="menu" className="md:block lg:block hidden">
          <button onclick="toggleMenu(false)" className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6">
            <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {/* <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Sign In</button> */}
    </div>
  </nav>
  <div className="bg-gray-100 h-screen">
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
          The Freedom & Safety in<br/>
          <span className="text-indigo-700"> Maacha Bank </span>
        </h1>
      </div>
      <div className="flex justify-center items-center w-4/5">
        {/* <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Login</button> */}
        <div className="w-full w-2/5">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Card Number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="1" maxlength="16" id="username" type="text" placeholder="Card Number"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Code Pin
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" maxlength="4" id="password" type="password" placeholder="****"/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2022 Acme Corp. All rights reserved.
  </p>
</div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Login