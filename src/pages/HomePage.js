import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="./images/home/img01.jpg" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>lorem10</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">lorem10</div>
                    <span className="cita">Simplemente excelente!</span>
                    <span className="autor">Juan Perez</span>
                </div>
            </div>
        </main>
    );
}

export default HomePage