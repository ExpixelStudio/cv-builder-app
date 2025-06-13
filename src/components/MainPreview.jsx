import { useState, useEffect } from "react";
import CvRender from "./CvRender";
import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import SkillsInfo from "./SkillsInfo";
import WorkExpInfo from "./WorkExpInfo";


export default function MainPreview() {

  const [generalFormData, setGeneralFormData] = useState({});
  const [educationFormData, setEducationFormData] = useState({});
 /*  const [generalInfo, setGeneralInfo] = useState({
    email:'',
    phone:'',
    address:''
  })
 */
   useEffect(() => {
    const savedGeneralData = localStorage.getItem("generalInfo");
    const savedEducationData = localStorage.getItem("educationInfo");
    if (savedEducationData) setEducationFormData(JSON.parse(savedEducationData));
    if (savedGeneralData) setGeneralFormData(JSON.parse(savedGeneralData));
  }, []);

  // Handler to clear localStorage + state
  const handleClearGeneralInfo = () => {
    localStorage.removeItem("generalInfo");
    setGeneralFormData({});
  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <GeneralInfo formData={generalFormData} setFormData={setGeneralFormData}/>
        <EducationInfo formData={educationFormData} setFormData={setEducationFormData} />
      </div>

      <CvRender generalFormData={generalFormData} educationFormData={educationFormData} onClear={handleClearGeneralInfo} />
     
    </div>
  );
};
