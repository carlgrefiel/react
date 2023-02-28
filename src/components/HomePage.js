import { useUser } from "../provider/UserContext";
const LoggedInUser = () => {
    const {user} = useUser();
    return (
        <p>
            Hello <span className="Username">{user.name}</span>
        </p>
    );
};

const Header =() => {
    
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    );
};

const Page = () => {
    const {user} = useUser();
    return (
        <div>
            <h2>What is gwapo</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Written By {user.name}</p>
        </div>
    );
};

function HomePage() {
    return (
        <div>
            <Header />
            <Page />
        </div>
    );
}
export default HomePage;

