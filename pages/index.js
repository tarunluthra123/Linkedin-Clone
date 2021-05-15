import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import getUser from "../utils/getuser";
import LoadingPage from "../components/LoadingPage";

export default function Home() {
    const user = getUser();

    useEffect(() => {
        if (user) {
            Router.push("/home");
        }
    }, [user]);

    if (user) {
        return <LoadingPage />;
    }

    return (
        <div className="h-full w-full">
            <header className="bg-white flex justify-between px-4 py-3 items-center">
                <Link href="/">
                    <img
                        src="/linkedin_logo_blue.png"
                        className="h-10 cursor-pointer"
                    />
                </Link>
                <span className="w-2/5 flex items-center justify-end">
                    <Link href="/signup">
                        <span className="font-bold text-gray-500 mx-2 cursor-pointer hover:bg-gray-200 p-2 transition-all transition-duration-100 hover:text-black">
                            Join now
                        </span>
                    </Link>

                    <Link href="/signin">
                        <button className="bg-white border border-blue-500 border-solid font-bold px-5 py-1 text-blue-500 rounded-full outline-none hover:bg-blue-100 transition-all transition-duration-100 hover:ring-1 focus:outline-none focus:ring">
                            Sign in
                        </button>
                    </Link>
                </span>
            </header>

            <main className="bg-white h-auto pt-5">
                <section className="flex flex-col justify-around items-center lg:flex-row">
                    <div className="">
                        <h1 className="text-left text-blue-500 text-5xl px-20% pb-10">
                            Welcome to your professional community
                        </h1>
                        <div className="text-lg font-gray-600 border-2 border-solid border-gray-300 p-3 rounded-md mx-5 mb-3 hover:shadow-md cursor-pointer">
                            Search for a job
                        </div>
                        <div className="text-lg font-gray-600 border-2 border-solid border-gray-300 p-3 rounded-md mx-5 mb-3 hover:shadow-md cursor-pointer">
                            Find a person you know
                        </div>
                        <div className="text-lg font-gray-600 border-2 border-solid border-gray-300 p-3 rounded-md mx-5 mb-3 hover:shadow-md cursor-pointer">
                            Learn a new skill
                        </div>
                    </div>
                    <img
                        src="/working_man.png"
                        className="mx-4 w-6/12 rounded-md"
                    />
                </section>

                <section className="bg-lightgray flex flex-col px-4 pt-8 lg:flex-row">
                    <h2 className="text-black text-3xl mb-3 ml-2 w-full lg:text-5xl">
                        Find open jobs and internships
                    </h2>
                    <div className="font-bold text-gray-600">
                        <h3 className="ml-2">SUGGESTED SEARCHES</h3>
                        <div className="flex flex-wrap">
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Engineering
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Business Development
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Finance
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Administrative Assistant
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Retail Associate
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Customer Service
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Operations
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Information Technology
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Marketing
                            </span>
                            <span className="bg-gray-300 text-gray-700 font-bold text-lg rounded-full px-4 py-2 m-2 hover:bg-gray-400 cursor-pointer">
                                Human Resources
                            </span>
                        </div>
                    </div>
                </section>

                <section className="px-8 bg-lightgray pt-10 flex flex-col items-center lg:flex-row pb-10">
                    <div className="w-full">
                        <h1 className="text-linkedinblue text-4xl">
                            Let the right people know you're open to work
                        </h1>
                        <p className="text-3xl mt-5 mb-5">
                            With the Open To Work feature, you can privately
                            tell recruiters or publicly share with the LinkedIn
                            community that you are looking for new job
                            opportunities
                        </p>
                    </div>
                    <img
                        src="/linkedin_open_to_work.png"
                        className="w-6/12 rounded-full "
                    />
                </section>
                <section className="bg-white pt-10 pb-10">
                    <h1 className="text-linkedinblue text-4xl mx-5 lg:mx-20">
                        Join your colleagues, classmates, and friends on
                        LinkedIn.
                    </h1>
                    <button
                        className="bg-darkerblue text-white text-lg px-4 py-2 rounded-full mt-4 hover:bg-blue-400 mb-5 mx-5 outline-none focus:outline-none lg:mx-20"
                        onClick={() => {
                            Router.push("/home");
                        }}
                    >
                        Get started
                    </button>
                    <img src="/work_scenery.png" className="w-screen" />
                </section>
            </main>

            <footer className="bg-lightgray w-full h-auto pt-5 px-10 flex justify-around pb-10">
                <img src="/linkedin_logo_blue.png" className="h-5" />
                <div className="flex flex-col justify-start">
                    <h5 className="font-bold text-black text-base">General</h5>
                    {[
                        "Sign Up",
                        "Help Center",
                        "About",
                        "Press",
                        "Blog",
                        "Careers",
                        "Developers",
                    ].map((item) => (
                        <span className="text-gray-500 font-bold text-sm hover:text-linkedinblue hover:underline cursor-pointer">
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col justify-start">
                    <h5 className="font-bold text-black text-base">
                        Browse LinkedIn
                    </h5>
                    {["Learning", "Jobs", "Salary", "Mobile", "Services"].map(
                        (item) => (
                            <span className="text-gray-500 font-bold text-sm hover:text-linkedinblue hover:underline cursor-pointer">
                                {item}
                            </span>
                        )
                    )}
                </div>
                <div className="flex flex-col justify-start">
                    <h5 className="font-bold text-black text-base">
                        Business Solutions
                    </h5>
                    {["Talent", "Marketing", "Sales", "Learning"].map(
                        (item) => (
                            <span className="text-gray-500 font-bold text-sm hover:text-linkedinblue hover:underline cursor-pointer">
                                {item}
                            </span>
                        )
                    )}
                </div>
                <div className="flex flex-col justify-start">
                    <h5 className="font-bold text-black text-base">
                        Directories
                    </h5>
                    {[
                        "Members",
                        "Jobs",
                        "Companies",
                        "Salaries",
                        "Featured",
                        "Learning",
                        "Posts",
                        "Articles",
                        "Schools",
                        "News",
                        "News Letters",
                        "Services",
                        "Interview Prep",
                    ].map((item) => (
                        <span className="text-gray-500 font-bold text-sm hover:text-linkedinblue hover:underline cursor-pointer">
                            {item}
                        </span>
                    ))}
                </div>
            </footer>
        </div>
    );
}
