/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

console.log(data);

function App() {
  const [jobs, setJobs] =  useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() =>  setJobs(data),[]);

  const filterFunc = ({role, level, tools, languages}
    ) => {
    if(filters.length === 0){
      return true;
    }

    const tags = [role, level];

    if(tools){
      tags.push(...tools);
    }

    if(languages){
      tags.push(...languages);
    }

    return tags.some(tag => filters.includes(tag));
  }

  const handleTagClick = (tag) => {
    if(filters.includes(tag)) return; 
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) =>{
    setFilters(filters.filter(
      f=> f !== passedFilter
      ));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunc); 

  return (
    <div className="App">
      <header className='bg-teal-500 mb-12'>
        <img src='/images/bg-header-desktop.svg'/>
      </header>
      
        {filters.length > 0 && (
          <div className={`flex-wrap flex bg-white shadow-md my-16 mx-10 p-6 rounded`}>
          {(filters.map((filter) => 
              <span className='mr-4 mb-4 p-2 rounded font-bold  sm:mb-0'>
                <span className='text-teal-500 bg-teal-100 p-2'>
                  {filter}
                </span>
                <span onClick={() => handleFilterClick(filter)} className='cursos-pointer bg-teal-500 text-teal-100 p-2'>❌</span>
              </span>))} 
              <button onClick={clearFilters} className='font-bold text-gray-700 ml-auto'>Clear</button>
          </div>
        )}  
      {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ): (
          filteredJobs.map((job)=>(
            <JobBoardComponent 
              job={job} 
              key={job.id} 
              handleTagClick={handleTagClick}
            />
          ))
        )}
    </div>  
  );
}

export default App;

//TODOs
//1. Study the design & JSON(an array of object) -> to know how to structure our JSX
//2. Job Board Component -> the component that will receive the data JSON
//3. Get the data from the JSON
//4. Pass dwn the date to the Job board component
//5. Style it
//6. Filter component
//7. Filther the data