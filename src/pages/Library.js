import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function Library() {
  const [games, setGames] = useState([]);
  const { loading, data } = useQuery(QUERY_USER);
  
  useEffect(() => {
    if (data ) {
      setGames(data.user.games);
      console.log(games)
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Library</h1>
      {games && games.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.gameId}>{game.name}</li>
          ))}
        </ul>
      ) : (
        <p>No games in the library.</p>
      )}
    </div>
  );
}

export default Library;
