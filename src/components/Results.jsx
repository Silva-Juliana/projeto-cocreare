import React from 'react'


export default function Results(props) {
    return (
        <>
            <div class="dad_posts">
                <div class="posts">
                    <div className="image_peoples">
                        <img className="image" src={props.photo_user} alt='Twitter ' />
                    </div>
                    <section className="text_posts">
                        <div className="text">
                            <h2> { props.username } </h2>   
                            <span> { props.name} </span>
                        </div>
                        <p> {props.text} </p>
                        <a target="blank_" href= "https://twitter.com/explore">Ver mais no twitter</a>
                    </section>
                </div>
            </div>
        </>
    )
}
