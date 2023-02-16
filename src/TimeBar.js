import Time from "./img/Time.svg";
import Mobil from "./img/mobilveri.svg";
import Wifi from "./img/Wifi.svg";
import Battery from "./img/Battery.svg";

const TimeBar = () => {
  return (
    <div className="flex bg-black/20 fixed z-10 items-center justify-between w-full h-6">
      <div className="flex pl-1">
        <img src={Time} alt="" />
      </div>
      <div className="flex h-3">
        <img className="pr-1" src={Mobil} alt="" />
        <img className="pr-1" src={Wifi} alt="" />
        <img className="pr-1" src={Battery} alt="" />
      </div>
    </div>
  );
};

export default TimeBar;

/*
<component1/>
<component2/>
<component3/>
<component4/>

<div></div>
<div></div>
<div></div>
<div></div>


*/
