import logo from "../assets/Boishakh-Logo.png"
const NavLogo = () => {
    return (
        <div className="flex items-center justify-center">
            <img className="w-24 md:w-32 lg:w-40" src={logo} alt="logo" />
        </div>
    );
};

export default NavLogo;