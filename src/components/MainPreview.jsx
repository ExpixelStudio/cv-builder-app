import GeneralInfo from "./GeneralInfo";
import SkillsInfo from "./SkillsInfo";


export default function MainPreview() {
  return (
    <div className="grid grid-cols-1">
     <GeneralInfo />
     <SkillsInfo />
    </div>
  );
};
