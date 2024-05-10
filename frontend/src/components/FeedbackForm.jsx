import React, { useState } from 'react';

const FeedbackForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [reason, setReason] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleWordCount = (event) => {
    setReason(event.target.value);
    setWordCount(event.target.value.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Name & Email</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
            <button onClick={handleNextStep} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 2: Rating</h2>
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</button>
            ))}
            <div className="mt-4">
              <button onClick={handlePreviousStep} className="bg-gray-400 text-white px-4 py-2 rounded-md mr-4">
                Previous
              </button>
              <button onClick={handleNextStep} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Reason for Rating</h2>
            <textarea
              value={reason}
              onChange={handleWordCount}
              placeholder="Share your feedback (Max 500 words)"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              rows={5}
            />
            <p className="text-sm text-right">{wordCount}/500 words</p>
            <div className="mt-4">
              <button onClick={handlePreviousStep} className="bg-gray-400 text-white px-4 py-2 rounded-md mr-4">
                Previous
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;