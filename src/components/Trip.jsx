import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maos.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Canada"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum sed consequatur recusandae! Repellat dolorem suscipit repellendus quibusdam doloremque accusantium, minima quidem vel alias ea explicabo aut! Quidem, eum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nisi eveniet exercitationem quos ipsum quidem suscipit adipisci veniam eligendi quaerat sint culpa itaque nihil, natus assumenda voluptas fugit esse mollitia!"
        />

        <TripData
          image={Trip2}
          heading="Trip in France"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum sed consequatur recusandae! Repellat dolorem suscipit repellendus quibusdam doloremque accusantium, minima quidem vel alias ea explicabo aut! Quidem, eum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nisi eveniet exercitationem quos ipsum quidem suscipit adipisci veniam eligendi quaerat sint culpa itaque nihil, natus assumenda voluptas fugit esse mollitia!"
        />

        <TripData
          image={Trip3}
          heading="Trip in USA"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum sed consequatur recusandae! Repellat dolorem suscipit repellendus quibusdam doloremque accusantium, minima quidem vel alias ea explicabo aut! Quidem, eum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nisi eveniet exercitationem quos ipsum quidem suscipit adipisci veniam eligendi quaerat sint culpa itaque nihil, natus assumenda voluptas fugit esse mollitia!"
        />
      </div>
    </div>
  );
}

export default Trip;
