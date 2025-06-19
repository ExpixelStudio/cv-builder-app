import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { MdSchool, MdDelete } from "react-icons/md";
import { FaEdit, FaPlusCircle } from "react-icons/fa";

export default function EducationInfo({ formData, setFormData }) {
  /*  const [isFormCollapsed, setIsFormCollapsed] = useState(false); */ //replaced this with isCollapsed in educationList object

  const uid = uuidv4();
  console.log({ uid });
  const [educationList, setEducationList] = useState([
    {
      id: uid,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      isCollapsed: false,
    },
  ]);

  const emptyEducation = {
    id: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    isCollapsed: false,
  };

  const { school, degree, startDate, endDate, location } = formData;

  function handleFormChange(event) {
    const { name, value } = event.target; //destructure
    setFormData((prev) => ({ ...prev, [name]: value })); // [name] Is shorthand for creating an object property whose key is dynamic, based on the value of the name variable in the form.
  }

  function handleDataStorage(e) {
    e.preventDefault();
    localStorage.setItem("educationInfo", JSON.stringify(formData));
    console.log(formData);
  }

  function handleAddEducation() {
    setEducationList((prev) => [...prev, { ...emptyEducation, id: uuidv4() }]);
  }

  return (
    <div className="bg-gray-100 inline-flex items-center justify-center p-6 w-full">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <div className="flex justify-center ">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Education
          </h2>
          <span>
            <MdSchool />
          </span>
        </div>
        {educationList.map((education, index) => (
          <div key={education.id} className="mb-6">
            {education.isCollapsed ? (
              <div className="flex items-center justify-between w-full p-4 border rounded-xl bg-gray-50">
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800">
                    {school}
                  </p>
                </div>
                <div className="flex space-x-4 text-blue-600 cursor-pointer">
                  <FaEdit size={22} />
                  <MdDelete size={22} color="red" />
                </div>
              </div>
            ) : (
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={handleDataStorage}
              >
                {/* School */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School
                  </label>
                  <input
                    type="text"
                    name="school"
                    placeholder="University of Example"
                    value={school || ""}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Degree */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Degree
                  </label>
                  <input
                    type="text"
                    name="degree"
                    placeholder="Bachelor of Science in Computer Science"
                    value={degree || ""}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={startDate || ""}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={endDate || ""}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Location */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="City, Country"
                    value={location || ""}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-200"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        ))}
        <div
          onClick={handleAddEducation}
          className="flex space-x-2 items-center justify-center w-full border rounded-xl cursor-pointer py-3 text-blue-600 hover:bg-gray-50"
        >
          <FaPlusCircle />
          <span>Add Education</span>
        </div>
      </div>
    </div>
  );
}
