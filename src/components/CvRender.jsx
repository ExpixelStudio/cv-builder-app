import { useEffect } from "react";
import GeneralInfo from "./GeneralInfo";

import { MdDelete } from "react-icons/md";



export default function CvRender({ generalFormData, onClear }) {


  return (
    <div className="flex flex-col items-center bg-blue-600 text-white p-6 rounded-t-2xl shadow-md h-fit">
      {/* Name aligned left and vertically centered */}
      <div>
        <h1 className="text-2xl font-bold">{generalFormData.name}</h1>
      </div>
      {/* Contact info aligned right */}
      <div>
        <p className="mb-1"><strong>Email:</strong> <br/> {generalFormData.email}</p>
        <p className="mb-1"><strong>Phone:</strong> <br/> {generalFormData.phone}</p>
        <p className="mb-1">Address:<br/> {generalFormData.address}</p>
        <MdDelete onClick={onClear}/>

      </div>
    </div>
  );
}
