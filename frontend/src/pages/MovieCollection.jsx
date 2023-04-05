// import data from './records/MovieData.json';
import MovieList from '../movie/MovieList';

// const Movies = data.MovieData;

function List() {
  return (
    <>
      <div>
        <MovieList />
      </div>
      {/* <div class="text-center">
        <br />
        <h3>Joel Hilton's Movie List</h3>
        <br />
      </div>
      <div>
        <table className="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Director</th>
              <th scope="col">Rating</th>
              <th scope="col">Category</th>
              <th scope="col">Edited</th>
            </tr>
          </thead>
          <tbody>
            {Movies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}

export default List;
