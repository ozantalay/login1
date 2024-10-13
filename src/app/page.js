import './globals.css'

export default function Home() {
  return (
    <div className="flex flex-row w-full h-screen "> 
     
      <div className=" mt-20 ml-20 flex flex-col justify-center">
        <h1 className="font-sans text-8xl">LOGIN</h1>
        <input placeholder="Username" className="border-2 w-96  h-9" />
        <input placeholder="Password" className="border-2 w-96 h-9 mt-5" />
        
        <button className="w-48  h-9 bg-[#DA211C] text-white mt-2">LOGIN</button>
        <div className="mt-2">
          <button>Forgot Password</button>
          <button className="ml-[180px] ">Register</button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[600px] h-full relative ml-[400px]">
        {/* Sayfayı çapraz çizen resim */}
        <div className="z-[-1] bg-[#DA211C] w-[800px] h-[800px] absolute  top-2/4 transform -translate-y-1/2 clip-path-clip" />
        <div className="flex justify-end items-start mt-10  ">
          <img src='/hamburger.png' className='h-[600px] w-[800px]'  />
        </div>
      </div>
    </div>
  );
}
