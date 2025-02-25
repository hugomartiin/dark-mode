import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
            <div className="relative">
                <h1 className="text-4xl font-bold text-main-header-light dark:text-main-header-dark mb-6">User Persona</h1>
                <div className="absolute -bottom-2 left-0 w-30 mb-3 h-2 bg-list-bullet-light dark:to-list-bullet-dark  rounded-full"></div>
            </div>
            <ThemeToggle />
        </header>
    );
}

export default Header;
