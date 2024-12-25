import React from 'react';
import { Pie } from '@ant-design/plots';

const CategoriesChart = () => {

    const config = {
        data: [
            { type: 'Bánh sinh nhật', value: 27 },
            { type: 'Bánh truyền thống', value: 25 },
            { type: 'Cookie & MiniCake', value: 18 },
            { type: 'Bánh mì & Bánh mặn', value: 15 },

        ],
        angleField: 'value',
        colorField: 'type',
        label: {
            text: 'value',
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
    };
    return <Pie {...config} />;
};

export default CategoriesChart;