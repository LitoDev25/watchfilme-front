import { useEffect, useState } from 'react';
import api from '../../service/api.js';
import Header from '../partials/header';
import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie");

            // console.log(response.data);
            setFilmes(response.data);
        }


        loadFilmes();
        setLoading(false);

    }, []);

    if(loading) {
        return(
            <div className='loading'>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="list-films">
                        {filmes.map(function (filme) {
                            return (
                                <article className='article-capa' key={filme._id}>
                                    <Link to={`/movie/${filme._id}`}>
                                        <button>
                                            <img src={filme.poster} alt={filme.name} />
                                            <strong>{filme.name}</strong>
                                        </button>
                                    </Link>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}