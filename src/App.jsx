import './index.css'

function App() {

  return (
    <div className="App">
      <div className='w-[80vw] xl:w-[40vw] my-28 lg:my-56 mx-auto block rounded-lg overflow-hidden lg:flex'>
        <img src='/src/image-product-desktop.jpg' className='h-[45vh] w-full lg:h-[50vh] lg:w-[20vw]'></img>
        <div className='px-5 py-5 w-full lg:h-[50vh] lg:w-[20vw] bg-white '>
          <p className='text-gray-600 tracking-widest font-mont'>PERFUME</p>
          <h1 className='text-4xl pr-14 font-extrabold font-fr'>Gabrielle Essence Eau De Parfum</h1>
          <p className='text-gray-600 py-5 lg:pr-14 font-mont'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
          <div className='flex items-center font-fr'>
            <p className='italic text-4xl font-bold text-[#3c8067]'>$149.99</p>
            <p className='italic px-5 line-through text-gray-600'>$199.99</p>
          </div>
          <button className='flex items-center bg-[#3c8067] py-2.5 px-20 rounded-lg mx-auto m-10 hover:bg-green-800 duration-500 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <p className='px-5 text-xl font-bold'>Add To Cart</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
