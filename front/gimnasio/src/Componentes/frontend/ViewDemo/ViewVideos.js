import React from "react";
import ViewDemo from "./ViewDemo";

import image1 from "../../../assets/admin/assets/imgEjercicios/burpees.jpg";
import image2 from "../../../assets/admin/assets/imgEjercicios/pullup.JPG";
import image3 from "../../../assets/admin/assets/imgEjercicios/pushJerk.jpg";


const cards = [
  {
    id: 1,
    title: "Burpees",
    image: image1,
    url: "https://www.youtube.com/watch?v=TU8QYVW0gDU&list=PLfO1dpxI1140x875qWxmMc8wzIS2iBCmM&index=2&ab_channel=CrossFit%C2%AE",
  },
  {
    id: 2,
    title: "Pull Up",
    image: image2,
    url: "https://www.youtube.com/watch?v=aAggnpPyR6E&list=PLfO1dpxI1140x875qWxmMc8wzIS2iBCmM&index=3&ab_channel=CrossFit%C2%AE",
  },
  {
    id: 3,
    title: "Push Jerk",
    image: image3,
    url: "https://www.youtube.com/watch?v=V-hKuAfWNUw&list=PLfO1dpxI1140x875qWxmMc8wzIS2iBCmM&index=7&ab_channel=CrossFit%C2%AE",
  },
];

function ViewVideos() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <ViewDemo imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewVideos;