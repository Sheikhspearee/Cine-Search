import MovieCard from "../components/MovieCard"

function Home() {

    const movies = [
        {id: 1, title: "John Wick", release_date:"2020" },
        {id: 2, title: "John Kick", release_date:"2020" },
        {id: 3, title: "John Trick", release_date:"2020" },
        {id: 4, title: "John Mick", release_date:"2020" }

    ]

    return 
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} /> ))}
            </div>
        </div>
    
}