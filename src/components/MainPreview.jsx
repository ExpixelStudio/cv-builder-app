import { useState, useEffect } from "react";
import CvRender from "./CvRender";
import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import SkillsInfo from "./SkillsInfo";
import WorkExpInfo from "./WorkExpInfo";


export default function MainPreview() {

  const [generalFormData, setGeneralFormData] = useState({});
  // const [skillsFormData, setSkillsFormData] = useState({});
 /*  const [generalInfo, setGeneralInfo] = useState({
    email:'',
    phone:'',
    address:''
  })
 */
   useEffect(() => {
    const savedGeneralData = localStorage.getItem("generalInfo");

    /* if (savedFormData) setFormData(JSON.parse(savedFormData)); */
    if (savedGeneralData) setGeneralFormData(JSON.parse(savedGeneralData));
  }, []);

  return (
    <div className="grid grid-cols-2">
      <GeneralInfo formData={generalFormData} setFormData={setGeneralFormData}/>
      <CvRender generalFormData={generalFormData} />
     {/* <GeneralInfo />
     <WorkExpInfo />
     <EducationInfo /> */}
    </div>
  );
};
