import Logo from "./Logo";

function Header() {
    return (
        <div className="max-w-7xl mx-auto flex sm:flex-row flex-col justify-between items-center p-2">
            {/* logo */}
            <Logo />
            <p className="text-sm text-slate-800">
                A product by{" "}
                <a href="https://ehmasuk.vercel.app" className="text-blue-500 hover:underline">
                    Eh Masuk
                </a>
            </p>
        </div>
    );
}

export default Header;
