import React, { useState } from 'react';

const Hero = () => {
  const [solvedTasks, setSolvedTasks] = useState([]);
  const [unsolvedTasks, setUnsolvedTasks] = useState([]);
  const [newSolvedTask, setNewSolvedTask] = useState('');
  const [newUnsolvedTask, setNewUnsolvedTask] = useState('');

  const [solvedStriked, setSolvedStriked] = useState({});
  const [unsolvedStriked, setUnsolvedStriked] = useState({});

  const handleAddSolvedTask = () => {
    if (newSolvedTask.trim() !== '') {
      setSolvedTasks([...solvedTasks, newSolvedTask]);
      setSolvedStriked({ ...solvedStriked, [newSolvedTask]: false });
      setNewSolvedTask('');
    }
  };

  const handleAddUnsolvedTask = () => {
    if (newUnsolvedTask.trim() !== '') {
      setUnsolvedTasks([...unsolvedTasks, newUnsolvedTask]);
      setUnsolvedStriked({ ...unsolvedStriked, [newUnsolvedTask]: false });
      setNewUnsolvedTask('');
    }
  };

  const toggleStrikethroughSolved = (task) => {
    setSolvedStriked({ ...solvedStriked, [task]: !solvedStriked[task] });
  };

  const toggleStrikethroughUnsolved = (task) => {
    setUnsolvedStriked({ ...unsolvedStriked, [task]: !unsolvedStriked[task] });
  };

  return (
    <div className="min-h-screen h-full w-full flex flex-col items-center bg-gray-900 p-4 md:p-8 text-white">
      <h2 className='text-center font-mono text-4xl text-green-400 mb-4'>codesync</h2>
      <h1 className="text-yellow-300 text-2xl font-mono mt-4 mb-4 text-center">hi, did you solve the daily?</h1>
      
      <div className='flex flex-row justify-between w-full max-w-md mt-4 mb-8 space-x-2 '>
        <a href='https://leetcode.com' className='text-gray-900 bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded-md text-center'>lc</a>
        <a href='https://www.geeksforgeeks.org' className='text-gray-900 bg-green-400 hover:bg-green-500 px-4 py-1 rounded-md text-center'>gfg</a>
        <a href='https://www.hackerrank.com' className='text-gray-900 bg-blue-400 hover:bg-blue-500 px-4 py-1 rounded-md text-center'>hacker</a>    
      </div>

      <div className="w-full flex flex-col items-center space-y-8" >
        <div className="w-full max-w-md flex flex-col items-center bg-transparent">
          <h2 className="font-mono text-3xl text-green-400 mb-4">solved</h2>

          <div className="inputContainer flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              value={newSolvedTask}
              onChange={(e) => setNewSolvedTask(e.target.value)}
              className="flex-1 rounded-md p-2 text-gray-900"
              placeholder="Add a solved task"
            />
            <button
              onClick={handleAddSolvedTask}
              className="flex-1 bg-purple-500 hover:bg-purple-600 rounded-md p-2"
            >
              add task
            </button>
          </div>

          <div className="solvedContainer bg-gray-700 w-full h-60 overflow-y-auto rounded-lg p-2">
            <ul>
              {solvedTasks.map((task, index) => (
                <li
                  key={index}
                  className={`text-center my-2 cursor-pointer ${solvedStriked[task] ? 'line-through text-gray-400' : 'text-green-300'}`}
                  onClick={() => toggleStrikethroughSolved(task)}
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full max-w-md flex flex-col items-center space-y-8 bg-transparent">
          <h2 className="font-mono text-3xl text-red-400 mb-0">unsolved</h2>

          <div className="inputContainer flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              value={newUnsolvedTask}
              onChange={(e) => setNewUnsolvedTask(e.target.value)}
              className="flex-1 rounded-md p-2 text-gray-900"
              placeholder="Add an unsolved task"
            />
            <button
              onClick={handleAddUnsolvedTask}
              className="flex-1 bg-purple-500 hover:bg-purple-600 rounded-md p-2"
            >
              add task
            </button>
          </div>

          <div className="unsolvedContainer bg-gray-700 w-full h-60 overflow-y-auto rounded-lg p-2">
            <ul>
              {unsolvedTasks.map((task, index) => (
                <li
                  key={index}
                  className={`text-center my-2 cursor-pointer ${unsolvedStriked[task] ? 'line-through text-gray-400' : 'text-red-300'}`}
                  onClick={() => toggleStrikethroughUnsolved(task)}
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
