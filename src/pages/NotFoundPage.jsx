import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

function NotFoundPage() {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className = "text-yellow-400 text-6xl mb-4"/>
        <h1 className="text-5xl font-bold mb-4">
            404 - Not Found Buoooiii
        </h1>
        <p className="text-xl mb-5">Page Doesn't Exist</p>
        <Link
            href="/"
            className="text-white bg-indigo-700 hover:bg-indigo-900 rounded px-3 py-2 mt-4 "
        >
            Go Back
        </Link>
    </section>
  )
}

export default NotFoundPage