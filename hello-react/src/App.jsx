import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskCard from './TaskCard'; 

function App() {
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">Smarter Tasks</h1>
        <div className="flex space-x-2">
          <p className='font-bold'>Project:</p> <p>Graduation Final Year Project (Revamp College Website)</p>
        </div>
        <div className='flex space-x-2'>
          <div className="border-1 border-solid ">
            <h1 className='text-2xl text-gray-500'>Pending</h1>
            <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S" status="pending" />
            <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" status="pending"/>
          </div>
          <div className="border-1 border-solid">
            <h1 className='text-2xl text-gray-500'>Done</h1>
            <TaskCard title="Design the mockup" dueDate="10th April" assigneeName="Rohit M" status="done"/>
            <TaskCard title="Get the approval from principal" dueDate="20th April" assigneeName="Ajay S" status="done"/>
            
          </div>
        </div>
      </div>
    </div>
  );
}



export default App
