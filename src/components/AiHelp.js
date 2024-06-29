import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AiHelp = () => {
  const generativeAI = new GoogleGenerativeAI({
    apiKey: 'AIzaSyB_OvRpjG7Vm6PsvM7EuTQY3xLvX2qN9dQ', // Replace with your actual API key
  });

  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const getAiHelp = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      const response = await generativeAI.predict({
        prompt: userInput, // Use userInput for the prompt
      });
      setAiResponse(response.data); // Adjust this line based on the actual response structure
    } catch (error) {
      console.error('Error calling Google Generative AI:', error);
      // Handle errors gracefully, e.g., display an error message to the user
      setAiResponse('An error occurred while getting the response.');
    }
  };

  return (
    <div className='min-h-screen h-full w-full flex flex-col items-center  bg-gray-900  md:p-8 text-gray-600 space-y-4 py-6'>
      <h3 className="text-purple-300 text-center text-3xl ">AI Help</h3>
      <form onSubmit={getAiHelp} className='w-full mx-auto'>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your question"
          rows="3"
          cols="30"
          className='block mx-auto  px-6 rounded-md'
        />
        <button type="submit" className='bg-purple-500 hover:bg-purple-600 rounded-md p-2 my-6 block mx-auto'>Get Response</button>
      </form>
      <div className='bg-slate-600 rounded-md min-h-fit p-4'>
        <h3 className='block mx-auto text-center text-sl text-green-300'>Response:</h3>
        <p className='text-stone-200 my-2'>{aiResponse}</p>
      </div>
    </div>
  );
};

export default AiHelp;
