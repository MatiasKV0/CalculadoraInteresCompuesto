const Alerta = ({ msg }) => {
  return (
    <div className="mt-6">
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg shadow-sm" role="alert">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-medium text-sm">{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Alerta;