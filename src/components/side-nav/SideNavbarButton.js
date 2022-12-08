import {useNavigate} from "react-router-dom";


export default function SideNavbarButton({name, to}) {
    const navigate = useNavigate();

    const navigateHandler = (event) => {
        navigate(to);
    }

    return (
        <div>
            <button className="navbutton" onClick={navigateHandler}>{name}</button>
        </div>
    )

}