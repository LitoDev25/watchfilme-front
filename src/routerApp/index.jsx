import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Erro from "../pages/erro";
import Movie from "../pages/movie";
import Watch from "../pages/watch";

export default class RouterApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/movie/:id"} element={<Movie />} />
                    <Route path={"/movie/:movieId/:episodeId"} element={<Watch />} />

                    <Route path={"*"} element={<Erro />} />
                </Routes>
            </BrowserRouter>
        )
    }
}