import NotificationCard from "./NotificationCard";

export default function NotificationPage({requests}) {
  return (
    <div className={"friendPageDiv"}>
      {
        requests.map(request => {
          console.log(request);
          return (
            <NotificationCard friend={request}/>
          )
        })
      }
    </div>
  );
}
