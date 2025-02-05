const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600">Page Not Found</p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default NotFound;
