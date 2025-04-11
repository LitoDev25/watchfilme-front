import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../partials/header';
import './movie.css';
import { useNavigate } from "react-router-dom";

import api from '../../service/api';

export default function Movie() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [filmes, setFilmes] = useState({});
    const [seasons, setSeasons] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadFilmes() {
            await api.get(`/movie/${id}`)
                .then((response) => {
                    setFilmes(response.data);
                    setSeasons(response.data.seasons);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("Filme não encontrado!");
                });
        }

        loadFilmes();
    }, [id])

    if (loading) {
        return (
            <div className='loading'>
                <h1>Carregando Filme...</h1>
            </div>
        )
    }

    function MoviesSeasons(seasons, changeWatch) {
        let temp = 0;
        return (
            <>
                {seasons.map((season) =>
                    <div key={season._id}>
                        <h2 key={season._id}>Temporada: {temp += 1}</h2> <br />
                        <div className="eps-box-all">
                            {season.episodes.map((eps) => (
                                <div key={eps._id} className="box-eps">
                                    <button onClick={() => changeWatch(season._id, eps._id)}>
                                        <div className="capa-img-vid">
                                            <img src={season.episodesBanner} alt={eps.name} />
                                        </div>
                                        <div className="name-vid-inf">
                                            <h4>{eps.name}</h4>
                                            <small><b>Lançamento: {eps.releaseDate}</b></small>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </>
        );
    }




    function changeWatch(seasonId, id) {
        return navigate(`/movie/${seasonId}/${id}`);
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="filme-info">
                        <div className="img-info-capa">
                            <img src={filmes.poster} alt="" />
                        </div>
                        <div className="infos-div-filme">
                            <div className="name-movie-div">
                                <h2>{filmes.name}</h2>
                            </div>
                            <div className="gender-div-filme">
                                <h4>Genero:
                                    {filmes.gender.map((gender) => {
                                        return (
                                            <small key={gender._id}>{gender.name}</small>
                                        )
                                    })}
                                </h4>
                            </div>
                            <div className="episodios-filmes">
                                <h4>Episodios: <small>{filmes.episode}</small></h4>
                            </div>
                            <div className="audio-filme">
                                <h4>Audio: <small>{filmes.audio}</small></h4>
                            </div>
                            <div className="subtitle-filme">
                                <h4>Legenda: <small>{filmes.subtitled}</small></h4>
                            </div>
                            <div className="sinopse-filme">
                                <h4><b>sinopse:</b><br></br> <small>{filmes.sinopse}</small></h4>
                            </div>
                        </div>
                    </div>

                    <div className="list-episodios-div">
                        <h1>Episodios: </h1>

                        {MoviesSeasons(seasons, changeWatch)}
                    </div>
                </div>
            </main>
        </>
    )
}