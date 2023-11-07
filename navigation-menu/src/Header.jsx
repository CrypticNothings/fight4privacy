import tax from './assets/tax.jpg'
import charity from './assets/charity.jpg'
import impersoantion from './assets/imper.jpg'
import job from './assets/job.jpg'
import loan from './assets/loan.jpg'
import lottery from './assets/lottery.jpg'
import phishing from './assets/phishing.png'
import ponzi from './assets/Ponzi.jpg'
import ransom from './assets/ransom.jpg'
import romance from './assets/romance.jpg'
import scam from './assets/scam.png'
import shopping from './assets/shopping.jpg'
import social from './assets/social.jpg'

export default function Hero(){
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
           <div className="font-mono grid md:grid-cols-3 justify-center place-content-center gap-4">
            <div className="shadow-2xl rounded-xl">
                <img src={charity} alt="" className=" w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">charity fraud</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">Scammers pose as charitable organizations, seeking donations for fake causes or disasters.</p>
                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={impersoantion} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">impersonation scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">Scammers impersonate government officials, law enforcement, or utility companies, claiming that the victim owes money and threatening legal action.</p>
                     
                </div>
            </div><div className="shadow-2xl rounded-xl">
                <img src={job} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">job and employment scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                    Scammers pose as potential employers and request personal information, payment for background checks, or training fees.
                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={loan} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Loan Scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                    Fake lenders offer loans with attractive terms but require upfront fees or deposits before providing the loan.
                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={lottery} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Lottery or Prize Scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                        Victims receive notifications of winning a lottery or prize but must pay fees or taxes upfront to claim their winnings.

                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={phishing} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Phishing emails</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                    Scammers send deceptive emails that appear to be from legitimate sources, asking recipients to provide sensitive information like login credentials or personal details.
                    Phishing websites: Fraudulent websites mimic legitimate ones to trick users into entering their personal information.
                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={ponzi} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Investment and Ponzi Schemes</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                    Scammers offer investment opportunities that promise high returns but are actually pyramid schemes or fraudulent investments.

                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={ransom} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Ransomware Attacks</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                        Malicious software is used to encrypt a victim data, and a ransom is demanded in exchange for the decryption key.

                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={scam} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Tech Support Scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                        Scammers pose as tech support agents from well-known companies, claiming that the victims computer has issues and offering to fix it for a fee.

                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={shopping} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Online Shopping Scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                    Fraudulent online stores offer products at attractive prices but never deliver them or provide fake or low-quality items.
                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={social} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6 rounded-b-xl">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Social Engineering Scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                    Scammers manipulate individuals into revealing sensitive information through phone calls, social engineering, or pretexting.

                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={tax} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Nigerian (419) Scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                    Scammers promise large sums of money or other rewards in exchange for a small upfront payment or personal information.
                    </p>

                </div>
            </div>
            <div className="shadow-2xl rounded-xl">
                <img src={romance} alt="" className="w-full h-64 object-center object-cover rounded-t-xl" />
                <div className="bg-white p-6">
                    <h2 className="text-3xl font-semibold text-blue-800 capitalize">Romance Scams</h2>
                    <p className="text-lg text-gray-500 line-clamp-2">
                        Scammers build romantic relationships with victims online, gain their trust, and then request money for various reasons, such as emergencies or travel expenses.

                    </p>

                </div>
            </div>
           </div>
        </div>
        </>
    );
}