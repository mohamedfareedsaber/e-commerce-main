import Link from "next/link"
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { TbLockExclamation } from "react-icons/tb";
import { BiSolidRename } from "react-icons/bi";
import { BiRename } from "react-icons/bi";


export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text center ">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    <div className="w-3/5 p-7">
                        <div className="text-left font-bold">
                            <span className="text-green-500"> e-</span>commerce
                        </div>
                        <div className=" text-center py-10">
                            <h2 className="text-3xl font-bold text-green-500 mb-2">Sign up to Account</h2>
                            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                            <div className="flex justify-center my-2">
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><BsFacebook className="text-sm" /></a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><BsGoogle className="text-sm" /></a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><BsFillTelephoneFill className="text-sm" /></a>
                            </div>
                            <p className="text-gray-400 my-3">or use your email account</p>
                            <div className="flex flex-col items-center  ">
                                <div className="bg-gray-100 w-64 p-2 flex items-center"><BiSolidRename className="text-gray-400  mr-2 " />
                                    <input type="text" name="text" placeholder="First Name" className="bg-gray-100 outline-none text-sm flex-1" />
                                </div>
                                <br />
                                <div className="bg-gray-100 w-64 p-2 flex items-center"><BiRename className="text-gray-400  mr-2 " />
                                    <input type="text" name="text" placeholder="Last Name" className="bg-gray-100 outline-none text-sm flex-1" />
                                </div>
                                <br />
                            </div>
                            <div className="flex flex-col items-center  ">
                                <div className="bg-gray-100 w-64 p-2 flex items-center"><BsFillEnvelopeFill className="text-gray-400  mr-2 " />
                                    <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                                </div>
                                <br />

                                <div className="flex flex-col items-center  ">
                                    <div className="bg-gray-100 w-64 p-2 flex items-center"><TbLockExclamation className="text-gray-400  mr-2 " />
                                        <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                    </div>
                                    <div className="flex justify-between w-64 mp-5">
                                        <label className="flex items-center text-xs"><input type="checkbox" name="remeber" className="mr-1" />Remember Me</label>
                                        <Link href="/forgotpassword" className="text-xs">Forgot Password?</Link>
                                    </div>
                                    <br />
                                    <Link href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 
            hover:text-white">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2">Are you actually registered before? </h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-2">Fill up personal information and....................</p>
                        <Link href="/signin" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white 
            hover:text-green-500">Sign In</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
