import './index.css';
import { React, Component, useState, useEffect } from 'react';

export default function Home( ) {
    useEffect( () => {
        $('.slider').slick({
            adaptiveHeight: true,
            autoplaySpeed: 500,
            arrows: false,
            dots: false,
            autoplay: true
        });
    })

    const updateSlick = ( data ) => {
        const count = parseInt(sessionStorage.getItem('slick_count')) | 0
        sessionStorage.getItem('slick_count', data.count)
        for(i = 0; i < count; i++) {
            $('.slider').slick('slickRemove', i )
        } 
        data.slickAdd.forEach( slick => {
            $('.slider').slick('slickAdd',slick.local);
        });
    }


        const query = ( ) => {
            fetch('upload.php')
                .then( response => response.json() )
                .then( data => {
                    updateSlick( data );
                    setTimeout(() => {
                        query( );
                    }, 10000 );
                } )
        }
    
    return <h1>Home</h1>;

}