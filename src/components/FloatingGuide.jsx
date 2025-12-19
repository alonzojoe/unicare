import RobotImg from "@/assets/images/logos/robot.png";
import Guide from "@/assets/images/logos/guide.png";

const FloatingGuide = () => {
  return (
    <div
      className=" 
        fixed
        top-1/2
        left-4
        -translate-y-1/2
        z-120
        flex
        flex-col
        items-center
        justify-center
        gap-2
       "
    >
      <img
        className="w-20 h-auto cursor-pointer hidden md:inline"
        src={RobotImg}
        alt="robot"
      />
      <img className="w-12 h-auto cursor-pointer" src={Guide} alt="guide" />
    </div>
  );
};

export default FloatingGuide;
