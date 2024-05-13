import React, { useState } from 'react';
import FormCreation from "./createForm/FormCreation";

const CreateForm = () => {
  const [isCreating, setIsCreating] = useState(false);

  const forms = [
    { name: 'Form 1', date: '2022-01-15' },
    { name: 'Form 2', date: '2022-01-20' },
    { name: 'Form 3', date: '2022-01-25' },
    { name: 'Form 4', date: '2022-01-30' },
    { name: 'Form 5', date: '2022-02-05' },
    { name: 'Form 6', date: '2022-02-10' },
    { name: 'Form 7', date: '2022-02-15' },
  ];

  const handleCreateForm = () => {
    setIsCreating(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Form List</h1>
      {!isCreating && (
        <button
          onClick={handleCreateForm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New Form
        </button>
      )}
      
      <h3 className='text-xl font-light mt-4'>Recent Form</h3>
      <ul className={`mt-4 overflow-y-auto px-5 ${isCreating ? 'hidden' : 'block'}`} style={{ maxHeight: '65vh' }}>
        {forms.map((form, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{form.name}</h2>
                <p className="text-sm text-gray-500">Created on {form.date}</p>
              </div>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isCreating && (
        <FormCreation setIsCreating={setIsCreating} />
      )}
    </div>
  );
};

export default CreateForm;
