import Link from "next/link"

export default function not_foun_page() {
    return (
        <>
            <title>OOps That Page Cannot Found!!</title>
            <div className="countiner mx-auto  py-16  h-full flex flex-col  justify-center items-center space-y-12">


                <div className="text-center space-y-6 ">

                    <h1 className="text-3xl sm:text-6xl">404 - Page Not-Found</h1>
                    <p className="text-xl">We Cann`t Find This Page</p>

                </div>

                <Link href="/" className="bg-blue-600 hover:bg-blue-950
             text-white px-6 py-3 rounded-md text-lg sm:text-xl focus:outline-none focus:ring-4
             focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap">Home Page </Link>
            </div>
        </>


    )
}