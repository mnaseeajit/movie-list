import Data from "./Data";
const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];
const MovieList = () => {
    const ButtonClicked=(name)=>{
             console.log(`filtered by ${name}`)
    }
    return (
        <div id="movieList">
            <h1>Top 15 Movies of All Time</h1>
            <div id="genreSection">
                 <h2>Filter by Genre</h2>
                 <div id="filter">
                      {
                        genres.map((name)=>{
                            return (
                                <button id="name" key={name} onClick={()=>ButtonClicked(name)}>{name}</button>
                            )
                        })
                      }
                 </div>
            </div>
            <div>
                <table>
                    <thead>
                       <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                       </tr>
                    </thead>
                    <tbody>
                    {
                        Data.map((movie,i)=>{
                            return (
                                <tr key={i}>
                                     <td>{movie.title}</td>
                                     <td>{movie.genre}</td>
                                     <td>{movie.year}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default MovieList;