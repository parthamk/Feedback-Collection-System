// import React, { useState } from 'react'
// import InputText from './InputText';
// import TextArea from './TextArea';
// import InputNumber from './InputNumber';

// const FormCreation = ({ setIsCreating }) => {
//   const [formData, setFormData] = useState({ formName: '', formDescription: '' });
//   const [inputFields, setInputFields] = useState([]);
//   const [showInputField, setShowInputField] = useState(false);

//   const handleAddInput = () => {
//     setInputFields([...inputFields, { id: inputFields.length + 1 }]);
//   };

//   const handleCancel = () => {
//     setIsCreating(false);
//     setFormData({ formName: '', formDescription: '' });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic here to handle form submission
//     console.log('Form submitted:', formData);
//     setIsCreating(false);
//     setFormData({ formName: '', formDescription: '' });
//   };

//   const toggleInputField = () => {
//     setShowInputField(true);
//     handleAddInput();
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center gap-2">
//         <InputText onAddInput={handleAddInput} onClick={toggleInputField} />
//         <TextArea />
//         <InputNumber />
//       </div>
//       <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg p-4 mt-4">
//         {/* Form Title */}
//         <div className="mb-4">
//           <label htmlFor="formName" className="block text-sm font-medium text-gray-700">
//             Form Name
//           </label>
//           <input
//             type="text"
//             id="formName"
//             name="formName"
//             value={formData.formName}
//             onChange={handleChange}
//             placeholder='Name your form'
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2"
//           />
//         </div>
//         {/* Form Description */}
//         <div className="mb-4">
//           <label htmlFor="formDescription" className="block text-sm font-medium text-gray-700">
//             Form Description
//           </label>
//           <textarea
//             id="formDescription"
//             name="formDescription"
//             value={formData.formDescription}
//             onChange={handleChange}
//             placeholder='What is this form about'
//             rows="3"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2"
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           {/* form generates with component */}
//           {/* Replace with form component  */}
//           {showInputField ? (
//             <div key={field.id} className="mb-4">
//               <label htmlFor={`input-${field.id}`} className="block text-sm font-medium text-gray-700">
//                 Input {index + 1}
//               </label>
//               <input
//                 type="text"
//                 id={`input-${field.id}`}
//                 name={`input-${field.id}`}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2"
//               />
//             </div>
//           ):(

//             <div className="flex justify-center items-center mt-1 text-8xl text-gray-300 w-full border-dashed border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2">
//               Your Form Here
//             </div>
//           )}

//           {/* Render input fields dynamically */}
//           {inputFields.map((field, index) => (
//             <div key={field.id} className="mb-4">
//               <label htmlFor={`input-${field.id}`} className="block text-sm font-medium text-gray-700">
//                 Input {index + 1}
//               </label>
//               <input
//                 type="text"
//                 id={`input-${field.id}`}
//                 name={`input-${field.id}`}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2"
//               />
//             </div>
//           ))}

//         </div>
//         <div className="flex justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Save Form
//           </button>
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </>
//   )
// }

// export default FormCreation

import React, { useState } from 'react';
import InputText from './InputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';

const FormCreation = ({ setIsCreating }) => {
    const [formData, setFormData] = useState({ formName: '', formDescription: '' });
    const [inputFields, setInputFields] = useState([]);
    const [showInputField, setShowInputField] = useState(false);

    const handleAddInput = () => {
        setInputFields([...inputFields, { id: inputFields.length + 1 }]);
    };

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

    const toggleInputField = () => {
        setShowInputField(true);
        handleAddInput();
    };

    return (
        <>
            <div className="flex justify-center items-center gap-2">
                <InputText onAddInput={toggleInputField} />
                <TextArea />
                <InputNumber />
            </div>

              <form onSubmit={handleSubmit}>
                <div className="bg-gray-50 shadow-md rounded-lg p-4 mt-4">
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
                          placeholder='Name your form'
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2"
                      />
                  </div>
                  {/* Form Description */}
                  <div className="mb-4">
                      <label htmlFor="formDescription" className="block text-sm font-medium text-gray-700">
                          Form Description
                      </label>
                      <textarea
                          id="formDescription"
                          name="formDescription"
                          value={formData.formDescription}
                          onChange={handleChange}
                          placeholder='What is this form about'
                          rows="3"
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2"
                      ></textarea>
                  </div>
                </div>
                <div className="bg-gray-50 shadow-md rounded-lg p-4 mt-4">
                  {/* Form Title */}
                  <div className="mb-4">
                      {/* Replace with form component  */}
                      {showInputField ? (
                          <input
                              type="text"
                              placeholder="Enter text"
                              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2"
                          />
                      ) : (
                          <div className="flex justify-center items-center mt-1 text-8xl text-gray-300 w-full border-dashed border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2">
                              Your Form Here
                          </div>
                      )}
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
                </div>
              </form>
            
        </>
    );
};

export default FormCreation;
