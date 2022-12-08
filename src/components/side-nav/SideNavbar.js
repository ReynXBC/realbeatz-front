import SideNavbarButton from "./SideNavbarButton";

export default function SideNavbar() {
  return (
    <div id={"SideNavbar"}>
      <div>
        <SideNavbarButton name={"Posts"} to={"posts"}/>
        <SideNavbarButton name={"Discover"} to={"friends"}/>
        <SideNavbarButton name={"Notifications"} to={"notifications"}/>
      </div>
      <div>
        <SideNavbarButton name={"Profile"} to={"profile"}/>
        <SideNavbarButton name={"Settings"} to={"settings"}/>
      </div>
    </div>
  )
}