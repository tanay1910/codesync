import React, { useState } from 'react';

const Hero = () => {
  const [solvedTasks, setSolvedTasks] = useState([]);
  const [unsolvedTasks, setUnsolvedTasks] = useState([]);
  const [newSolvedTask, setNewSolvedTask] = useState('');
  const [newUnsolvedTask, setNewUnsolvedTask] = useState('');

  // State to track which tasks are struck through
  const [solvedStriked, setSolvedStriked] = useState({});
  const [unsolvedStriked, setUnsolvedStriked] = useState({});

  const handleAddSolvedTask = () => {
    if (newSolvedTask.trim() !== '') {
      setSolvedTasks([...solvedTasks, newSolvedTask]);
      setSolvedStriked({ ...solvedStriked, [newSolvedTask]: false }); // Initialize new task with false (not struck)
      setNewSolvedTask('');
    }
  };

  const handleAddUnsolvedTask = () => {
    if (newUnsolvedTask.trim() !== '') {
      setUnsolvedTasks([...unsolvedTasks, newUnsolvedTask]);
      setUnsolvedStriked({ ...unsolvedStriked, [newUnsolvedTask]: false }); // Initialize new task with false (not struck)
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
    <div className="min-h-screen h-full flex flex-col items-center bg-black">
    <h2 className='text-center font-mono text-3xl text-green-400 mx-auto my-4 '>codesync</h2>
      <h1 className="text-red-500 text-2xl font-mono mt-12 mb-2 mx-auto">hi, did you solve the daily?</h1>
      
      <div className='flex flex-row justify-around w-[40%] mt-4'>
        <a href='https://www.google.com' className='text-green-300 bg-violet-500 hover:bg-violet-600 px-4 py-1 rounded-md '>lc</a>
        <a href='https://www.google.com' className='text-green-300 bg-violet-500 hover:bg-violet-600 px-4 py-1 rounded-md'>gfg</a>
        <a href='https://www.google.com' className='text-green-300 bg-violet-500 hover:bg-violet-600 px-4 py-1 rounded-md'>hacker</a>    
      </div>

      <div className="w-full max-w-4xl flex bg-transparent h-96 mt-20">
        <div className="w-1/2 flex flex-col items-center min-[80%] h-full">
          <h2 className="font-mono text-3xl text-red-700">solved</h2>

          <div className="inputContainer flex flex-row flex-nowrap justify-between my-4">
            <input
              type="text"
              value={newSolvedTask}
              onChange={(e) => setNewSolvedTask(e.target.value)}
              className="flex-3 rounded-md mx-4"
            />
            <button
              onClick={handleAddSolvedTask}
              className="flex-1 bg-purple-400 rounded-md mx-2 text-center"
            >
              Add Task
            </button>
          </div>

          <div className="solvedContainer bg-slate-400 h-full w-[80%] overflow-y-auto rounded-lg">
            <ul>
              {solvedTasks.map((task, index) => (
                <li
                  key={index}
                  className={`text-center my-2 cursor-pointer ${solvedStriked[task] ? 'line-through' : ''}`}
                  onClick={() => toggleStrikethroughSolved(task)}
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center min-[80%] h-full">
          <h2 className="font-mono text-3xl text-red-700">unsolved</h2>

          <div className="inputContainer flex flex-row flex-nowrap justify-between my-4">
            <input
              type="text"
              value={newUnsolvedTask}
              onChange={(e) => setNewUnsolvedTask(e.target.value)}
              className="flex-3 rounded-md mx-4"
            />
            <button
              onClick={handleAddUnsolvedTask}
              className="flex-1 bg-purple-400 rounded-md mx-2 text-center"
            >
              Add Task
            </button>
          </div>

          <div className="unsolvedContainer bg-slate-400 h-full w-[80%] overflow-y-auto rounded-lg">
            <ul>
              {unsolvedTasks.map((task, index) => (
                <li
                  key={index}
                  className={`text-center my-2 cursor-pointer ${unsolvedStriked[task] ? 'line-through' : ''}`}
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
