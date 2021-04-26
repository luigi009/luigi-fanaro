import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default function FeaturedMovie({item}) {

    let firstDate =new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <>
          <section className="featured h-screen bg-cover bg-center" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
              <div className="featured--vertical w-[inherit] h-[inherit]" style={{background: 'linear-gradient(to top, #111 10%, transparent 90%)'}}>
                  <div className="featured--horizontal flex flex-col justify-center pl-8 pb-10 pt-9 w-[inherit] h-[inherit]" style={{background: 'linear-gradient(to right, #111 30%, transparent 70%)'}}>
                      <div className="featured--name text-4xl font-bold">{item.original_name}</div>
                      <div className="featured--info text-lg font-bold mt-4">
                          <div className="featured--points inline-block mr-4 text-[#46d369]">{item.vote_average} pontos</div>
                          <div className="featured--year mr-4 inline-block ">{firstDate.getFullYear()}</div>
                          <div className="featured-seasons inline-block mr-4">{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}</div>
                      </div>
                      <div className="featured--description overflow-ellipsis overflow-hidden whitespace-nowrap mt-4 sm:mr-3 sm:text-lg text-[#999] sm:max-w-[40%]">{item.overview}</div>
                      <div className="featured--buttons mt-4">
                          <a className="cursor-pointer featured--watchbutton inline-block sm:text-2xl font-bold p-5 mr-3 rounded-md no-underline bg-white text-black opacity-100 hover:opacity-70 transition duration-[0.2s] ease-in-out"> <PlayArrowIcon /> Assistir</a>
                          <a className="cursor-pointer featured--mylistbutton inline-block sm:text-2xl font-bold p-5 mr-3 rounded-md no-underline bg-[#333] text-white opacity-100 hover:opacity-70 transition duration-[0.2s] ease-in-out">+ Minha Lista</a>
                      </div>
                      <div className="featured--genres mt-4 sm:text-lg text-[#999]"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                  </div>
              </div>
          </section>  
        </>
    )
}
