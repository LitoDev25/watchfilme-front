import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './watch.css';

import api from "../../service/api";

export default function Watch() {
    const { movieId, episodeId } = useParams();
    const [episode, setEpisode] = useState([]);
    const [season, setSeason] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextEp, setNextEp] = useState('');
    const [previewEp, setPreviewEp] = useState('');


    useEffect(() => {
        async function loadEpisodio() {
            await api.get(`season/${movieId}`)
                .then((response) => {
                    setEpisode(response.data.episodes);
                    setSeason(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("Episodio não encontrado!");
                });;
        }

        loadEpisodio();
    }, [movieId]);

    for (let i = 0; i < episode.length; i++) {
        if (episode[i]._id === episodeId) {
            const nextEpSelect = i + 1;
            let previewEpSelect;
            if (i >= 1) {
                previewEpSelect = i - 1;
            } else {
                previewEpSelect = null;
            }
            setEpisode(episode[i]);
            if (nextEpSelect < episode.length) {
                setNextEp(episode[nextEpSelect]._id);
            } else {
                setNextEp(null);
            }

            if (previewEpSelect >= 0 && previewEpSelect !== null) {
                setPreviewEp(episode[previewEpSelect]._id);
            } else {
                setPreviewEp(null);
            }
            return
        }
    }


    if (loading) {
        return (
            <div className='loading'>
                <h1>Carregando Filme...</h1>
            </div>
        )
    }

    function nextCheckUndefined() {
        if (nextEp !== null) {
            return (
                <a href={`/movie/${season._id}/${nextEp}`}>
                    <button>Próximo</button>
                </a>
            )
        } else {
            return (
                <></>
            )
        }
    }

    function previewCheckUndefined() {
        if (previewEp !== null) {
            return (
                <a href={`/movie/${season._id}/${previewEp}`}>
                    <button>Anterior</button>
                </a>
            )
        } else {
            return (
                <></>
            )
        }
    }

    return (
        <>
            <div className="divHeader-watch">
                <div className="container">
                    <a href='/'><h1>AnimRepro</h1></a>
                </div>
            </div>
            <main>
                <div className="reprodutor-video">
                    <h1>{episode.name}</h1>

                    <iframe
                        title={episode.name}
                        src={episode.href}
                        allowFullScreen={true}
                        // width="640" height="480"
                        sandbox="allow-scripts allow-same-origin"
                        allow="autoplay">
                    </iframe>

                    <div className="btn-uses">
                        {previewCheckUndefined()}

                        <a href={`/movie/${season.movieId}`}>
                            <button>todos</button>
                        </a>

                        {nextCheckUndefined()}

                    </div>

                </div>
            </main>
        </>
    )
}
