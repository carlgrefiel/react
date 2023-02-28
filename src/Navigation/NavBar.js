import { Link } from "react-router-dom";
export default function NavBar() {
    return (
    <>
        <nav className='main_nav'>
            <Link to="/" className="nav-item">Home Page</Link>
            <Link to="/reducer" className="nav-item">Reducer</Link>
            <Link to="/modetoggler" className="nav-item">Mode Toggler</Link>
            <Link to="/promo" className="nav-item">Promo</Link>
            <Link to="/meals" className="nav-item">Meals</Link>
            <Link to="/feedback" className="nav-item">Feedback</Link>
            <Link to="/mapping" className="nav-item">Mapping</Link>
            <Link to="/remainder" className="nav-item">Remainder</Link>
            <Link to="/image" className="nav-item">Image</Link>
            <Link to="/video" className="nav-item">Video</Link>
            <Link to="/calcu" className="nav-item">Calculator</Link>
            <Link to="/todo" className="nav-item">TodoLists</Link>
            <Link to="/form" className="nav-item">Form</Link>
            

        </nav>
        <nav className='secondnav'>
        <Link to="/goal" className="nav-item">Goal</Link>
        <Link to="/impure" className="nav-item">Impure</Link>
        <Link to="/loopname" className="nav-item">Loop Name</Link>
        <Link to="/fetchdata" className="nav-item">Fetch Data</Link>
        <Link to="/useredu" className="nav-item">Use Reducer</Link>
        <Link to="/useref" className="nav-item">Use Ref</Link>
        <Link to="/main" className="nav-item">Main</Link>
        <Link to="/cloneelement" className="nav-item">Clone Element</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/mousetracker" className="nav-item">Mouse Tracker</Link>
        <Link to="/renderprops" className="nav-item">Render Props</Link>
        </nav>
    </>
    );
};