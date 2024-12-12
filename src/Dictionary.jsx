import React, { useState } from 'react';

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWordData = async () => {
    if (!searchTerm.trim()) {
      setError('Please enter a search term');
      return;
    }

    setIsLoading(true);
    setError(null);
    setWordData(null);

    try {
      const url = `https://cors-anywhere.herokuapp.com/http://beta.jisho.org/api/v1/search/words?keyword=${encodeURIComponent(searchTerm)}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      if (json.data && json.data.length > 0) {
        setWordData(json.data[0]);
      } else {
        setError('No results found');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to fetch word data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
      <h1 className="text-center text-2xl mb-4">Japanese Dictionary</h1>
      <div className="flex space-x-2 mb-4">
        <input
          className="flex-grow p-2 border rounded"
          placeholder="Enter a Japanese word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchWordData()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={fetchWordData}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-4">{error}</div>
      )}

      {wordData && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">{wordData.slug}</h2>
          {wordData.senses && wordData.senses[0] && (
            <p className="text-gray-700 mt-2">
              {wordData.senses[0].english_definitions.join(', ')}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dictionary;