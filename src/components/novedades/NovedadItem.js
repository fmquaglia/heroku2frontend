import React from 'react';

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body } = props;

    return (
        <div className='novedades'>
            <hi>{title}</hi>
            <h2>{subtitle}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
};

export default NovedadItem;