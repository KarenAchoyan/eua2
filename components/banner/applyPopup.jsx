import React from 'react';
import styles from "../../styles/banner.module.css";
import { Form, Input, Select, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Option } = Select;

const ApplyPopup = ({closeWindow}) => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };
    const [form] = Form.useForm();

    function handleClose() {
        closeWindow()
    }

    return (
        <div>
            <div className={styles.applyPopup}>
                <div className={styles.closeIcon} onClick={handleClose}>
                    <CloseOutlined />
                </div>
                <Form layout="vertical" form={form} onFinish={onFinish}>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Surname" name="surname" rules={[{ required: true, message: 'Please input your surname!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Education Type" name="educationType" rules={[{ required: true, message: 'Please select your education type!' }]}>
                        <Select>
                            <Option value="bachelors">Bachelor’s degree</Option>
                            <Option value="masters">Master’s degree</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Faculty" name="faculty" rules={[{ required: true, message: 'Please select your faculty!' }]}>
                        <Select>
                            <Option value="it">IT</Option>
                            <Option value="tourism">Tourism</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className={styles.back} />
        </div>
    );
};

export default ApplyPopup;
