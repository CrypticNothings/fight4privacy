
export default function Footer({icon}){
   return(
    <>
    <footer className="bg-gray-800 text-white p-6">
        <div className="max-w-6xl mx-auto font-mono">
            <div className="flex items-center justify-between flex-col md:flex-row">
                <div className="w-full md:w-1/2 mb-4">
                  <h2 className="text-2xl font-semibold capitalize mb-4">fight4Privacy</h2>
                  <p className="text-lg font-medium">
                  Protecting Your Privacy: Safeguarding Your Data in a Connected World. Your security, your control, your peace of mind.
                    </p> 
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex justify-around flex-col md:flex-row">
                        <div className="mb-4">
                        <ul className="space-y-2.5">
                            <li className=""><a href="" className="text-lg hover:text-teal-500">Home</a></li>
                            <li className=""><a href="" className="text-lg hover:text-teal-500">Contact</a></li>
                            <li className=""><a href="" className="text-lg hover:text-teal-500">Blog</a></li>
                            <li className=""><a href="" className="text-lg hover:text-teal-500">Terms of use</a></li>
                            <li className=""><a href="" className="text-lg hover:text-teal-500">Privacy Policy</a></li>
                        </ul>
                        </div>
                        <div className="">
                            <h2 className="text-2xl font-medium">Address</h2>
                            <p className="text-lg">USA, California</p>
                            <p className="text-lg mb-4">P.O Box 1234-254 Main street</p>
                            <div className="space-x-4 flex items-center">
                                <a href="" className=""><img src={icon.facebook} alt="" /></a>
                                <a href="" className=""><img src={icon.twitter} alt="" /></a>
                                <a href="" className=""><img src={icon.instagram} alt="" /></a>
                                <a href="" className=""><img src={icon.pinterest} alt="" /></a>
                                <a href="" className=""><img src={icon.youtube} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
   );
}