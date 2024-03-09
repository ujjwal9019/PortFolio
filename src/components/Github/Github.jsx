import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import GitHubCalendar from 'github-calendar';
import { Link } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  useEffect(() => {
    // Load GitHub contribution graph using github-calendar library
    GitHubCalendar('.github-calendar', 'ujjwal9019');
  }, []);

  return (
    
    <div className='text-center m-4 text-dark p-4 text-3xl'>
   <Link to = "https://github.com/ujjwal9019" >
      {/* Display GitHub Name */}
      Github Name: {data.name}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Display GitHub Profile Picture */}
        <img src={data.avatar_url} alt="Git picture" width={300} style={{ marginRight: '10px' }} />
        <br />
        {/* Display GitHub Bio */}
        <p className=''>{data.bio}</p>
      </div>
      <br />
      {/* Container for GitHub contribution graph */}
      <div className="github-calendar"></div>
      </Link>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    // Fetch GitHub information
    const response = await fetch('https://api.github.com/users/ujjwal9019');

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub information');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub information:', error);
    throw error;
  }
};
