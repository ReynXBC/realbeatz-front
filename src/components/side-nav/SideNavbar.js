import SideNavbarButton from "./SideNavbarButton";

export default function SideNavbar() {
  return (
    <div id={"SideNavbar"}>
      <div>
        <SideNavbarButton name={"Posts"} to={"posts"}/>
<<<<<<< HEAD
        <SideNavbarButton name={"Friends"} to={"friends"}/>
=======
        <SideNavbarButton name={"Discover"} to={"friends"}/>
        <SideNavbarButton name={"Notifications"} to={"notifications"}/>
>>>>>>> 33857aca1e96148c54347ae73e61740a5a6b9b68
      </div>
      <div>
        <SideNavbarButton name={"Profile"} to={"profile"}/>
        <SideNavbarButton name={"Settings"} to={"settings"}/>
      </div>
    </div>
  )
}