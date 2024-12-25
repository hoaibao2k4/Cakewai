import { ArrowUpOutlined, QuestionOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Popover, Row, Space, Typography, Tag } from "antd";
import RevenueCard from "~/components/Layouts/components/AdminDashboard/Card/RevenueCard";
import Card from "~/components/Layouts/components/AdminDashboard/Card/Card";
import CategoriesChart from "~/components/Layouts/components/AdminDashboard/CategoriesChart/CategoriesChart";
import OrdersStatusChart from "~/components/Layouts/components/AdminDashboard/OrderStatusChart/OrderStatusChart";
import CountUp from "react-countup";
import SalesChart from "~/components/Layouts/components/AdminDashboard/SalesChart/SalesChart";



function AdminDashboard() {
    const { Title } = Typography;
    const POPOVER_BUTTON_PROPS = {
        type: 'text',
    };
    const cardStyles = {
        height: '100%',
    };
    return (
        <div className="max-h-screen overflow-y-auto p-[16px] box-border">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6}>
                    <RevenueCard
                        title="Products"
                        value={5834}
                        diff={-1.3}
                        height={180}
                        justify="space-between"
                    />
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <RevenueCard
                        title="Customers"
                        value={5834}
                        diff={-12.3}
                        height={180}
                        justify="space-between"
                    />
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <RevenueCard
                        title="Orders"
                        value={3270}
                        diff={9.52}
                        height={180}
                        justify="space-between"
                    />
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <RevenueCard
                        title="Sales"
                        value="$ 1.324K"
                        diff={2.34}
                        height={180}
                        justify="space-between"
                    />
                </Col>
                <Col xs={24} lg={12}>
                    <Card
                        title="Categories"
                        extra={
                            <Popover content="Sales per categories" title="Categories sales">
                                <Button icon={<QuestionOutlined />}
                                    {...POPOVER_BUTTON_PROPS}
                                />
                            </Popover>
                        }
                        style={cardStyles}
                    >
                        <CategoriesChart />
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card
                        title="Orders by status"
                        extra={
                            <Popover content="Orders by status" title="Orders">
                                <Button icon={<QuestionOutlined />} {...POPOVER_BUTTON_PROPS} />
                            </Popover>
                        }
                        style={cardStyles}
                    >
                        <OrdersStatusChart />
                    </Card>
                </Col>
                <Col xs={24} lg={24}>
                    <Card
                        title="Overall sales"
                        extra={
                            <Popover content="Total sales over period x" title="Total sales">
                                <Button icon={<QuestionOutlined />} {...POPOVER_BUTTON_PROPS} />
                            </Popover>
                        }
                        style={cardStyles}
                    >
                        <Flex vertical gap="middle">
                            <Space>
                                <Title level={3} style={{ margin: 0 }}>
                                    $ <CountUp end={24485.67} />
                                </Title>
                                <Tag color="green-inverse" icon={<ArrowUpOutlined />}>
                                    8.7%
                                </Tag>
                            </Space>
                            <SalesChart />
                        </Flex>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default AdminDashboard;