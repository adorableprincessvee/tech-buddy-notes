import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Tech Buddy Notes</h1>
        <p className="text-gray-700 mb-6 text-center max-w-md">
            Keep track of your learning notes, resources, and everything you need to grow as a tech buddy! 
        </p>

        <div className="flex gap-4">
            <Link to="/notes">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                Go to Notes
            </button>
            </Link>

            <Link to="/resources">
            <button className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-gray-200">
                See Resources
            </button>
            </Link>
        </div>
        </div>
    );
}

export default Home;