import ReactDOM from "react-dom/client";
import TwiterCard from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    userName: "Midudev",
    name: "Manuel",
    isFollowing: true,
    id: 1,
    avatar: "https://unavatar.io/github/midudev",
  },
  {
    userName: "AdaLovelace",
    name: "Ada",
    isFollowing: false,
    id: 2,
    avatar: "https://unavatar.io/twitter/ada_lovelace",
  },
  {
    userName: "LinusTorvalds",
    name: "Linus",
    isFollowing: true,
    id: 3,
    avatar: "https://unavatar.io/github/torvalds",
  },
  {
    userName: "GraceHopper",
    name: "Grace",
    isFollowing: false,
    id: 4,
    avatar: "https://unavatar.io/twitter/gracehopper",
  },
  {
    userName: "ElonMusk",
    name: "Elon",
    isFollowing: true,
    id: 5,
    avatar: "https://unavatar.io/twitter/elonmusk",
  },
  {
    userName: "BillGates",
    name: "Bill",
    isFollowing: false,
    id: 6,
    avatar: "https://unavatar.io/twitter/BillGates",
  },
];

root.render(
  <section className="app">
    <TwiterCard initialIsFollowing userName="WilgreyMd">
      WilgreyMd
    </TwiterCard>
    {users.map((user) => {
      return (
        <TwiterCard
          key={user.id}
          initialIsFollowing={user.isFollowing}
          userName={user.userName}
        >
          {user.name}
        </TwiterCard>
      );
    })}
  </section>
);
