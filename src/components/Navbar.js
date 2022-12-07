import NavbarButton from "./NavbarButton";

export default function Navbar() {
    return (
        <div id={"Navbar"}>
            <div>
                <NavbarButton name={"Friends"}/>
                <NavbarButton name={"Messaging"}/>
            </div>
            <div>
                <NavbarButton name={"Profile"}/>
                <NavbarButton name={"Settings"}/>
            </div>
        </div>
    )
}