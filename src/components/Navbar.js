import NavbarButton from "./NavbarButton";

export default function Navbar() {
    return (
        <div>
            <NavbarButton name={"Profile"}/>
            <NavbarButton name={"Friends"}/>
            <NavbarButton name={"Messaging"}/>
            <NavbarButton name={"Settings"}/>
        </div>
    )

}