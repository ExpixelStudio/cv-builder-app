import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import SkillsInfo from "./SkillsInfo";
import WorkExpInfo from "./WorkExpInfo";


export default function MainPreview() {
  return (
    <div className="grid grid-cols-1">
     <GeneralInfo />
     <WorkExpInfo />
     <EducationInfo />
    </div>
  );
};
