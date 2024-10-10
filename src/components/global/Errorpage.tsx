import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="my-8 max-w-screen-lg px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* content - start */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-pink-600 mb-5">
              404 - Page Not Found
            </h1>
            <p className="text-gray-txt mb-5">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <Link className="btn btn-success text-white" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
