const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-10 bg-blue-gray-200 text-neutral-content ">
      <nav className="  mx-auto flex flex-col gap-2 "> 
      <h1 color="amber" className="text-[#dc2626] text-3xl font-extrabold my-4 ">Pet Express</h1>

 
      </nav>
      <nav className="flex justify-center mx-auto flex-col gap-2  my-4 ">
        <header className="flex flex-col  gap-2  font-extrabold text-xl">Company</header>
        <a className="cursor-pointer hover:text-red-600">About us</a>
        <a className="cursor-pointer hover:text-red-600">Contact</a>
        <a className="cursor-pointer hover:text-red-600">Jobs</a>
        <a className="cursor-pointer hover:text-red-600">Press kit</a>
      </nav>
      <nav className="flex flex-col gap-2 mx-auto sm:col-span-2 md:col-span-2 lg:col-span-1 my-4  ">
        <header className="flex flex-col gap-2 font-extrabold text-xl ">Legal</header>
        <a className="cursor-pointer hover:text-red-600 ">Terms of use</a>
        <a className="cursor-pointer hover:text-red-600">Privacy policy</a>
        <a className="cursor-pointer hover:text-red-600">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
