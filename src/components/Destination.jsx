import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

function Destination () {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see the beautiful nature</p>

      <DestinationData
        className="first-des"
        heading="Manali"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum sed consequatur recusandae! Repellat dolorem suscipit repellendus quibusdam doloremque accusantium, minima quidem vel alias ea explicabo aut! Quidem, eum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nisi eveniet exercitationem quos ipsum quidem suscipit adipisci veniam eligendi quaerat sint culpa itaque nihil, natus assumenda voluptas fugit esse mollitia!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Jammu & Kashmir"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum sed consequatur recusandae! Repellat dolorem suscipit repellendus quibusdam doloremque accusantium, minima quidem vel alias ea explicabo aut! Quidem, eum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nisi eveniet exercitationem quos ipsum quidem suscipit adipisci veniam eligendi quaerat sint culpa itaque nihil, natus assumenda voluptas fugit esse mollitia!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
