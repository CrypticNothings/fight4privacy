export default function Hero( {data} ){
    const dataArray = Array.isArray(data.data) ? data.data : [];
    return(
        <>
        <section className="relative  bg-image bg-no-repeat bg-cover  bg-center bg-clip-border  bg-origin-border h-96 ">
        <div className="bg-black bg-opacity-60 h-full top-0 right-0 left-0">
        <div className="absolute">
        <h2 className="md:text-8xl text-5xl font-bold mb-6 text-white text-center uppercase">Join the online Security Challenge</h2>
        <p className="md:text-4xl text-3xl text-center text-green-500 mb-6 capitalize font-bold">Empowering You to safeguard your digital rights</p>
        <div className="flex items-center justify-center">
            <button className="px-10 py-4 text-white font-semibold border-2 border-white hover:bg-teal-500 hover:border-0 hover:rounded-lg transition-all hover:delay-200 hover:duration-300 hover:ease-in-out">Get started</button>
        </div>
        </div>
        </div>
        </section>
        <div className="my-10 max-w-6xl mx-auto">
           <h2 className="text-5xl font-bold text-center bg-clip-text uppercase text-transparent bg-gradient-to-tr from-indigo-800 to-red-500 mb-6">Type Of scams</h2>
           <div className="font-sans grid md:grid-cols-3 justify-center place-content-center gap-4">
        {dataArray.map((item) => (
          <div key={item.id} className="shadow-2xl rounded-xl">
            <img src={item.image} alt={`Image for ${item.title}`} className="w-full h-64 object-center object-cover" />
            <div className="bg-white p-6 rounded-b-xl">
              <h2 className="text-3xl font-semibold text-blue-800 capitalize">{item.title}</h2>
              <p className="text-lg text-gray-500 line-clamp-2">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
           </div>
        </>
    );
}