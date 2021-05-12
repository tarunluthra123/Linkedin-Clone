import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import getUser from "../utils/getuser";

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
                        src="/blue-linkedin-logo.png"
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

            <section></section>
        </div>
    );
}
