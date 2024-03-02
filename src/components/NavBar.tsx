import DarkLogo from './Images/DarkLogo'

function NavBar() {
  return (
    <div className="bg-background z-10 flex justify-between items-center py-2 sm:py-4 border-b-2 border-gray w-full px-8 sm:px-16 md:px-20">
      <DarkLogo className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8" />
      <div className="space-x-4 sm:space-x-8 md:space-x-12 items-center hidden sm:flex sm:text-base md:text-lg">
        <a href="#" className="font-semibold">
          About Us
        </a>
        <a href="#" className="font-semibold">
          Log In
        </a>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar
