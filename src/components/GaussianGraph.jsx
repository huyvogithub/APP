import React, { useEffect, useState } from 'react';
import Gauge from 'react-gauge-component';
import './MultipleGauges.css'; // Import file CSS

const MultipleGauges = () => {
    const [gaugesData, setGaugesData] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-tqlme/endpoint/GET_MOTION_API');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const taytrai = data[0]?.public?.output?.jsonData?.taytrai_p;
            const cangtaytrai = data[0]?.public?.output?.jsonData?.cangtaytrai_p;
            const tayphai = data[0]?.public?.output?.jsonData?.tayphai_p;
            const cangtayphai = data[0]?.public?.output?.jsonData?.cangtayphai_p;
            setGaugesData({ taytrai, cangtaytrai, tayphai, cangtayphai });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="gauge-grid">
            <GaugeWithData name="TAY TRÁI" value={gaugesData.taytrai} unit="RAD/s" />
            <GaugeWithData name="TAY PHẢI" value={gaugesData.tayphai} unit="RAD" />
            <GaugeWithData name="CẲNG TAY TRÁI" value={gaugesData.cangtaytrai} unit="RAD" />
            <GaugeWithData name="CẲNG TAY PHẢI" value={gaugesData.cangtayphai} unit="RAD" />
        </div>
    );
};

const GaugeWithData = ({ name, value, unit }) => {
    return (
        <div className="gauge">
            <h3 className="gauge-name">{name}</h3>
            <Gauge value={value} />
            <p>{`${value} ${unit}`}</p>
        </div>
    );
};

export default MultipleGauges;
