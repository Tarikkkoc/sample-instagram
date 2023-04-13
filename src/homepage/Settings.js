import Setting from "./img/Setting.svg";
import Instagram from "./img/instagram.svg";
import Message from "./img/message.svg";
const Settings = () => {
  return (
    <div className="flex justify-between items-center w-full  h-12">
      <img className="h-8 w-8 flex-none cursor-pointer" src={Setting} alt="" />
      <img className="h-10 cursor-pointer" src={Instagram} alt="" />
      <img className="h-8 w-8 cursor-pointer flex-none" src={Message} alt="" />
    </div>
  );
};

export default Settings;
