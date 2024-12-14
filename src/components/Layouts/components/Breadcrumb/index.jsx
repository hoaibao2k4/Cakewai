import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BreadCrumb = ({ items }) => {
    return (
        <>
            <Breadcrumb
                separator=">">
                {items.map((item, index) => (
                    <Breadcrumb.Item key={index}>
                        {item.link ? <Link to={item.link}>{item.title}</Link> : item.title}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </>
    )
}

export default BreadCrumb;