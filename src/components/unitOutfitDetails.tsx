import React from "react";
import { Form, Input, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Header: React.FC<{ onDelete: () => void }> = ({ onDelete }) => {
  return (
    <div className="flex justify-between">
      <h1>Outfit Details</h1>
      <DeleteOutlined onClick={onDelete} />
    </div>
  );
};

const Image: React.FC<{ fieldPath: string[] }> = ({ fieldPath }) => {
  return (
    <Form.Item
      label="Image"
      name={[...fieldPath, "image"]}
      rules={[{ required: true, message: "Please input the image!" }]}
      tooltip="This is a required field"
    >
      <Input placeholder="Image placeholder" />
    </Form.Item>
  );
};

const Title: React.FC<{ fieldPath: string[] }> = ({ fieldPath }) => {
  return (
    <Form.Item
      label="Title"
      name={[...fieldPath, "title"]}
      rules={[{ required: true, message: "Please input the title!" }]}
      tooltip="This is a required field"
    >
      <Input placeholder="Title placeholder" />
    </Form.Item>
  );
};

const Description: React.FC<{ fieldPath: string[] }> = ({ fieldPath }) => {
  return (
    <Form.Item
      label="Description"
      name={[...fieldPath, "description"]}
      rules={[{ required: true, message: "Please input the description!" }]}
      tooltip="This is a required field"
    >
      <Input placeholder="Description placeholder" />
    </Form.Item>
  );
};

export { Header, Image, Title, Description };

const UnitOutfitDetails: React.FC<{
  index: number;
  onDelete: () => void;
}> = ({ index, onDelete }) => {
  const fieldPath = ["outfits", index.toString()];
  return (
    <Card>
      <Header onDelete={onDelete} />
      <Image fieldPath={fieldPath} />
      <Title fieldPath={fieldPath} />
      <Description fieldPath={fieldPath} />
    </Card>
  );
};

export default UnitOutfitDetails;
