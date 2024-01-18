const Header = () => {
  return (
    <div className="mt-10 flex justify-between rounded-2xl bg-white px-10 py-4 shadow-md">
      <div>
        <h1 className="text-3xl">CV-App Logo</h1>
        <p>Make your resume instantly</p>
      </div>
      <div className="flex items-center gap-6">
        <button className="border-4 border-blue-400 p-2">Load Template</button>
        <button className="border-4 border-blue-400 p-2">Clear Template</button>
      </div>
    </div>
  );
};

export default Header;
