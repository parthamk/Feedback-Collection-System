import React, { useState } from 'react';
import InputText from './InputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';
import FBD from '../../../components/FBD';


const FormCreation = ({ setIsCreating }) => {
    const [formData, setFormData] = useState({ formName: '', formDescription: '' });
    const [inputFields, setInputFields] = useState([]);
    const [showInputField, setShowInputField] = useState(false);
    const [showUrlModal, setShowUrlModal] = useState(false);

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
        setShowUrlModal(true);
    };

    const toggleInputField = () => {
        setShowInputField(true);
        handleAddInput();
    };

    const handleCopyUrl = () => {
        const url = "https://feedbackcollection.netlify.app/form";
        navigator.clipboard.writeText(url);
        // Add any additional logic here, such as showing a success message
    };

    const handleCloseModal = () => {
        setShowUrlModal(false);
    };

    return (
        <>
            <div className="flex justify-center items-center gap-2">
                <InputText onAddInput={toggleInputField} />
                <TextArea />
                <InputNumber />
            </div>

            <form onSubmit={handleSubmit}>
                {/* <div className="bg-gray-50 shadow-md rounded-lg p-4 mt-4">
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
                </div> */}
                <div className="  rounded-lg p-4 mt-4">
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
                            // <div className="flex justify-center items-center mt-1 text-8xl text-gray-300 w-full border-dashed border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-auto p-2">
                            //     Your Form Here
                            // </div>

                            <div>
                                <FBD/>

                                {/* <div>step1</div>
                                <div>step2</div>
                                <div>step3</div> */}
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

            {showUrlModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-center text-xl font-bold">Generated URL</p>
                            <button
                                type="button"
                                onClick={handleCloseModal}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                                type="text"
                                value="https://feedbackcollection.netlify.app/form"
                                readOnly
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            />
                            <button
                                type="button"
                                onClick={handleCopyUrl}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormCreation;
