import React, { useState } from "react";
import { Card, Modal, Button, Row, Col } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Tree, trees } from "../buyerPage/localData";

const CardContent: React.FC<{ tree: Tree }> = ({ tree }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false); // Fix: Properly toggling wishlist

  return (
    <div className="relative group">
      {/* Wishlist Heart Icon */}
      <div
        className="absolute top-2 right-2 z-10 flex items-center justify-center w-10 h-10 md:w-6 md:h-6 rounded-full border-2 border-red-300 bg-transparent shadow-md cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
      >
        {isWishlisted ? (
          <HeartFilled className="text-red-500 text-xl md:text-xs" />
        ) : (
          <HeartOutlined className="text-red-500 text-xl md:text-xs " />
        )}
      </div>

      {/* Card Component */}
      <Card
        className="w-full"
        hoverable
        cover={
          <div className="relative overflow-hidden">
            <img
              alt={tree.name}
              src={tree.image}
              className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        }
        onClick={() => setIsModalVisible(true)}
      >
        <Row className="flex justify-center items-start" gutter={[16, 16]}>
          <Col className="flex flex-col items-start" span={24} md={24}>
            <h2 className="text-lg font-semibold">{tree.name}</h2>
            <p className="text-gray-600">{tree.type}</p>
            <p className="text-gray-600">{tree.age}</p>
            <p className="text-green-700 font-bold">{tree.price}</p>
            <p className="text-green-700 font-bold">
              <EnvironmentOutlined />
            </p>
          </Col>
        </Row>
      </Card>

      {/* Modal for Details */}
      <Modal
        className="w-full h-full"
        title={tree.name}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <p>{tree.description}</p>
      </Modal>
    </div>
  );
};

const Content = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-600 text-center">
        Buy Trees
      </h1>

      <Row
        gutter={[16, 16]}
        className="flex md:flex-row flex-col justify-between md:mt-16"
      >
        {trees.map((tree: Tree) => (
          <Col
            key={tree.id}
            className="rounded-lg  flex justify-center mt-6 md:mt-0"
            span={24}
            md={4}
          >
            <CardContent tree={tree} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Content;
