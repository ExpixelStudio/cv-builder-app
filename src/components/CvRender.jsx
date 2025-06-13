import { useEffect } from "react";
import GeneralInfo from "./GeneralInfo";

import { MdDelete } from "react-icons/md";



export default function CvRender({ generalFormData, educationFormData, onClear }) {


  return (
    <div>

      {/* General Info Display */}
    <div className="flex flex-col items-center bg-blue-600 text-white p-6 rounded-t-2xl shadow-md h-fit">
      
      <div>
        <h1 className="text-2xl font-bold">{generalFormData.name}</h1>
      </div>
      
      <div>
        <p className="mb-1"><strong>Email:</strong> <br/> {generalFormData.email}</p>
        <p className="mb-1"><strong>Phone:</strong> <br/> {generalFormData.phone}</p>
        <p className="mb-1">Address:<br/> {generalFormData.address}</p>
        <MdDelete onClick={onClear}/>
      </div>

    </div>

      {/* Education Display. */}
      <div>
         <p className="mb-1"><strong>School:</strong> <br/> {educationFormData.school}</p>
         <p className="mb-1"><strong>Degree:</strong> <br/> {educationFormData.degree}</p>
         <p className="mb-1"><strong>Start Date:</strong> <br/> {educationFormData.startDate}</p>
         <p className="mb-1"><strong>End Date:</strong> <br/> {educationFormData.endDate}</p>
         <p className="mb-1"><strong>Location:</strong> <br/> {educationFormData.location}</p>
      </div>

    </div>
  );
}
