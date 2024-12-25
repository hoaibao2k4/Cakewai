import { Area } from '@ant-design/plots';
import { React } from 'react';

const SalesChart = () => {
    const data = [
        { category: 'Bánh sinh nhật', date: 'Jan', value: 1390.5 },
        { category: 'Bánh sinh nhật', date: 'Feb', value: 1250.3 },
        { category: 'Bánh sinh nhật', date: 'Mar', value: 1325.8 },
        { category: 'Bánh sinh nhật', date: 'Apr', value: 1405.2 },
        { category: 'Bánh sinh nhật', date: 'May', value: 1450.6 },
        { category: 'Bánh sinh nhật', date: 'Jun', value: 1389.9 },
        { category: 'Bánh sinh nhật', date: 'Jul', value: 1495.0 },
        { category: 'Bánh sinh nhật', date: 'Aug', value: 1430.3 },
        { category: 'Bánh sinh nhật', date: 'Sep', value: 1500.8 },
        { category: 'Bánh sinh nhật', date: 'Oct', value: 1535.6 },
        { category: 'Bánh sinh nhật', date: 'Nov', value: 1570.2 },
        { category: 'Bánh sinh nhật', date: 'Dec', value: 1600.1 },

        { category: 'Bánh truyền thống', date: 'Jan', value: 890.5 },
        { category: 'Bánh truyền thống', date: 'Feb', value: 925.3 },
        { category: 'Bánh truyền thống', date: 'Mar', value: 910.8 },
        { category: 'Bánh truyền thống', date: 'Apr', value: 950.2 },
        { category: 'Bánh truyền thống', date: 'May', value: 980.6 },
        { category: 'Bánh truyền thống', date: 'Jun', value: 945.9 },
        { category: 'Bánh truyền thống', date: 'Jul', value: 965.0 },
        { category: 'Bánh truyền thống', date: 'Aug', value: 970.3 },
        { category: 'Bánh truyền thống', date: 'Sep', value: 985.8 },
        { category: 'Bánh truyền thống', date: 'Oct', value: 1000.6 },
        { category: 'Bánh truyền thống', date: 'Nov', value: 1025.2 },
        { category: 'Bánh truyền thống', date: 'Dec', value: 1050.1 },

        { category: 'Cookie & MiniCake', date: 'Jan', value: 750.3 },
        { category: 'Cookie & MiniCake', date: 'Feb', value: 710.5 },
        { category: 'Cookie & MiniCake', date: 'Mar', value: 735.8 },
        { category: 'Cookie & MiniCake', date: 'Apr', value: 760.2 },
        { category: 'Cookie & MiniCake', date: 'May', value: 785.6 },
        { category: 'Cookie & MiniCake', date: 'Jun', value: 750.9 },
        { category: 'Cookie & MiniCake', date: 'Jul', value: 765.0 },
        { category: 'Cookie & MiniCake', date: 'Aug', value: 780.3 },
        { category: 'Cookie & MiniCake', date: 'Sep', value: 795.8 },
        { category: 'Cookie & MiniCake', date: 'Oct', value: 810.6 },
        { category: 'Cookie & MiniCake', date: 'Nov', value: 825.2 },
        { category: 'Cookie & MiniCake', date: 'Dec', value: 850.1 },

        { category: 'Bánh mỳ & Bánh mặn', date: 'Jan', value: 600.5 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Feb', value: 625.3 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Mar', value: 615.8 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Apr', value: 630.2 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'May', value: 640.6 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Jun', value: 635.9 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Jul', value: 645.0 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Aug', value: 655.3 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Sep', value: 660.8 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Oct', value: 670.6 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Nov', value: 680.2 },
        { category: 'Bánh mỳ & Bánh mặn', date: 'Dec', value: 700.1 },
    ];


    const config = {

        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'category',
        shapeField: 'smooth',
        stack: true,
    };

    return <Area {...config} />;

};

export default SalesChart;