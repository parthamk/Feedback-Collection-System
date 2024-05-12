import React, { useState } from 'react'

const FormCreation = ({ setIsCreating }) => {
  const [formData, setFormData] = useState({ formName: '', formDescription: '' });

  const handleCancel = () => {
    setIsCreating(false);
    setFormData({ formName: '', formDescription: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission
    console.log('Form submitted:', formData);
    setIsCreating(false);
    setFormData({ formName: '', formDescription: '' });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mt-4">
        <div className="mb-4">
          <label htmlFor="formName" className="block text-sm font-medium text-gray-700">
            Form Name
          </label>
          <input
            type="text"
            id="formName"
            name="formName"
            value={formData.formName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="formDescription" className="block text-sm font-medium text-gray-700">
            Form Description
          </label>
          <textarea
            id="formDescription"
            name="formDescription"
            value={formData.formDescription}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Form
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}

export default FormCreation