import React, { useState } from "react";
import { Form, Button, Card } from "antd";
import UnitOutfitDetails from "../components/unitOutfitDetails";

const SellsPage: React.FC = () => {
  const [form] = Form.useForm();
  const [outfitDetails, setOutfitDetails] = useState([{ id: 0 }]);

  const addOutfitDetail = () => {
    setOutfitDetails([...outfitDetails, { id: outfitDetails.length }]);
  };

  const removeOutfitDetail = (id: number) => {
    setOutfitDetails(outfitDetails.filter((item) => item.id !== id));
  };

  const onFinish = (values: any) => {
    console.log("Success", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        {outfitDetails.map((detail, index) => (
          <UnitOutfitDetails
            key={detail.id}
            index={index}
            onDelete={() => removeOutfitDetail(detail.id)}
          />
        ))}
        <Form.Item>
          <Button onClick={addOutfitDetail}>+</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SellsPage;
