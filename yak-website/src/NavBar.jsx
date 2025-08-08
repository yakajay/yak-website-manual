import { Link } from "react-router-dom";

const NavBAr = () => {
    return (
        <div className="nav-bar">
            <Link to="/July">
            <div>July</div>
            </Link>
            <Link to="/August">
            <div>August</div>
            </Link>
            <Link to="/Friday">
            <div>Friday</div>
            </Link>
            <Link to="/Props">
            <div>Props</div>
            </Link>
            
        </div>
    )
}

export default NavBAr;