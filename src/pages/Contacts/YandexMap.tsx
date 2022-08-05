import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";

const YandexMap = () => {
    return (
        <YMaps>
            <Map width='100%'
                 height='50vh' defaultState={{
                center: [55.741602, 37.633023],
                zoom: 10,
                controls: ['zoomControl'],
            }} modules={['control.ZoomControl']}>
                <Placemark
                    geometry={[55.741602, 37.633023]}
                    modules={['geoObject.addon.balloon']}
                    properties={{
                        iconCaption: "Oil Promotion LTD.",
                        balloonContentHeader: "Oil Promotion LTD.",
                        balloonContentBody:
                            "Russia, Moscow, Bolshaya Tatarskaya street, 9, office 11",
                        balloonContentFooter: "Mon-Fri 10:00 - 18:00",
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default YandexMap;
