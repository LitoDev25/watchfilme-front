import './header.css';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="top-bar">
                    <div className="logo-menu">
                        <div className="logo">
                            <a href='/'><h1>AnimRepro</h1></a>
                        </div>
                        <div className="menu">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="/"><button>Home</button></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="right-bar">
                        <div className="search-bar">
                            <input type="text" name="search" id="search" />
                            <button>Find</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}