import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export default function MovieRow({title, items}) {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRighttArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 250;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
    }

    return (
        <>
            <div className="movieRow mt-7">
                <h2 className="ml-7 mb-1 font-bold text-2xl max-w-lg tracking-wide">{title}</h2>
                <div className="movieRow--left">
                    <div onClick={handleLeftArrow} className="movieRow--left z-[99] transition duration-[0.5s] ease-in-out lg:opacity-0 cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 left-0">
                        <NavigateBeforeIcon style={{fontSize: 50}} />
                    </div>
                    <div onClick={handleRighttArrow} className="movieRow--right z-[99] transition duration-[0.5s] ease-in-out lg:opacity-0 cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 right-0">
                        <NavigateNextIcon style={{fontSize: 50}} />
                    </div>
                </div>
                <div className="movieRow--listarea overflow-x-hidden pl-7">
                    <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length * 250}}>
                        {items.results.length > 0 && items.results.map((item, key) => (
                            <div key={key} className="movieRow--item inline-block w-[250px]">
                                <img className="w-auto cursor-pointer transition duration-[0.2s] ease-in-out transform scale-[0.9] hover:scale-[1]" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
