import SideNavbarButton from "./SideNavbarButton";

export default function SideNavbar() {
    return (
        <div id={"SideNavbar"}>
            <div>
                <SideNavbarButton name={"Friends"}/>
                <SideNavbarButton name={"Messaging"}/>
            </div>
            <div>
                <SideNavbarButton name={"Profile"}/>
                <SideNavbarButton name={"Settings"}/>
            </div>
        </div>
    )
}