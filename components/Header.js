import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    return (
        <div className="header">
            <div className="nav-list">
                <a href="/">Home</a>
                <a href="/">Contact</a>
                <a href="/">About</a>
            </div>
            <ThemeSwitcher />
        </div>
    )
}
