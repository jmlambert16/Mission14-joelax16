import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [moviedata, setmoviedata] = useState<Movie[]>([]);

  useEffect(() => {
    const fecthmovie = async () => {
      const rsp = await fetch('https://localhost:7073/movie');
      const temp = await rsp.json();
      const filter = temp.filter((temp: any) => temp.edited === 'Yes');
      const asc = filter.sort((a: any, b: any) =>
        a.title.localeCompare(b.title),
      );

      setmoviedata(asc);
    };
    fecthmovie();
  }, []);

  return (
    <>
      <div>
        <h1>Movie List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {moviedata.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.category}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
