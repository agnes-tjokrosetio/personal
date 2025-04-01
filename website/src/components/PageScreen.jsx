function PageScreen({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#242424] overflow-x-hidden overflow-y-auto pt-[40px]">
      {children}
    </div>
  );
}

export default PageScreen;
