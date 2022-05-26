import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>lorem10</p>

            </div>
            <h2>Staff</h2>
            <div className="personas">
               
                <div className="persona">
                    <img src="../images/nosotros/nosotros1.jpg" alt="Juan Gomez" width='75px'/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus explicabo voluptatem beatae corrupti molestiae, minima magni enim totam, velit nisi aliquid accusantium! Nulla facilis quisquam, tempore voluptatem ducimus animi.</p>
                </div>
                <div className="persona">
                    <img src="./images/nosotros/nosotros2.jpg" alt="Diana Reyes" width='75px'/>
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus explicabo voluptatem beatae corrupti molestiae, minima magni enim totam, velit nisi aliquid accusantium! Nulla facilis quisquam, tempore voluptatem ducimus animi.</p>
                </div>
                <div className="persona">
                    <img src="./images/nosotros/nosotros3.jpg" alt="Roberto Zaptos" width='75px'/>
                    <h5>Roberto Zaptos</h5>
                    <h6>Gerente e Sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus explicabo voluptatem beatae corrupti molestiae, minima magni enim totam, velit nisi aliquid accusantium! Nulla facilis quisquam, tempore voluptatem ducimus animi.</p>
                </div>
                <div className="persona">
                    <img src="./images/nosotros/nosotros1.jpg" alt="Sandra Mastropiero" width='75px'/>
                    <h5>Sandra Mastropiero</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus explicabo voluptatem beatae corrupti molestiae, minima magni enim totam, velit nisi aliquid accusantium! Nulla facilis quisquam, tempore voluptatem ducimus animi.</p>
                </div>
                <div className="persona">
                    <img src="./images/nosotros/nosotros5.jpg" alt="Luciano Figuero" width='75px'/>
                    <h5>Luciano Figuero</h5>
                    <h6>Gerente Logistica</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus explicabo voluptatem beatae corrupti molestiae, minima magni enim totam, velit nisi aliquid accusantium! Nulla facilis quisquam, tempore voluptatem ducimus animi.</p>
                </div>
                </div>
            
        </section>
        
);
}

export default NosotrosPage