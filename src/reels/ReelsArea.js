import React from "react";

import Reel1 from "./img/p1.png";
import Reel2 from "./img/p2.png";
import Reel3 from "./img/p3.png";
import Reel4 from "./img/p4.png";
import Reel5 from "./img/p5.png";
import Reel6 from "./img/p6.png";
import Reel7 from "./img/p7.png";
import Reel8 from "./img/p8.jpg";
import Reel9 from "./img/p9.jpg";

const ReelsArea = () => {
  return (
    <div className="gap-4 mt-2 space-y-4 columns-1 sm:columns-2">
      <img className="w-full rounded-xl" src={Reel9} />
      <img className="w-full rounded-xl" src={Reel1} />
      <img className="w-full rounded-xl" src={Reel2} />
      <img className="w-full rounded-xl" src={Reel3} />
      <img className="w-full rounded-xl" src={Reel4} />
      <img className="w-full rounded-xl" src={Reel5} />
      <img className="w-full rounded-xl" src={Reel6} />
      <img className="w-full rounded-xl" src={Reel7} />
      <img className="w-full rounded-xl" src={Reel8} />
    </div>
  );
};

export default ReelsArea;
