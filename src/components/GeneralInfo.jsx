import { useState } from "react";

export default function GeneralInfo({formData, setFormData, localStorage}) {

  

  function handleFormChange(event) {
    const {name, value} = event.target //destructure
    setFormData(
      prev => ({...prev, [name]: value // [name] Is shorthand for creating an object property whose key is dynamic, based on the value of the name variable in the form.
    }));
  }

  function handleDataStorage(e){
    e.preventDefault();
    localStorage.setItem('generalInfo', JSON.stringify (formData))
    console.log(formData);
  }


  return (
    <div className="bg-gray-100 inline-flex items-center justify-center p-6 w-full">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Personal Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name || ''}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email || ''}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+1234567890"
              value={formData.phone || ''}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              name="address"
              rows= {3}
              placeholder="123 Main St, City, Country"
              value={formData.address || ''}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button

              type="submit"
              onClick= {handleDataStorage}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-200"
            >
              {
                !formData ? 'Submit' : 'Update Info'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}