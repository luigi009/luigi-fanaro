import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './MovieRow';
import FeaturedMovie from './FeaturedMovie';
import Header from './Header';

export default function home() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            //Movie List
            setMovieList(list);

            //Featured Data
            let originals = list.filter(i => i.slug === 'Originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
            setFeaturedData(chosenInfo);
        }
        loadAll();
    }, [])

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <>
          <div className="page">

              <Header black={blackHeader} />

              {featuredData && <FeaturedMovie item={featuredData} />}

              <section className="lists mt-[-250px]">
                  {movieList.map((item, key) => (
                      <MovieRow key={key} title={item.title} items={item.items} />
                  ))}
              </section>

              {movieList.length <= 0 &&
                <div className="loading fixed left-0 right-0 top-0 bottom-0 z-[99] bg-black flex justify-center items-center">
                    <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif" alt="Carregando" />
                </div>
              }

            <footer className="mt-7 mb-7 text-center">
                    Feito por Luigi Fanaro<br />
                    Direitos de imagem para Netflix<br />
                    Dados pegos do site Themoviedb.org
            </footer> 
          </div> 
        </>
    )
}
