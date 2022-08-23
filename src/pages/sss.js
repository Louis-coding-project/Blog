import React, { useState } from "react";
import "../components/antuse";
import {
  Button,
  Descriptions,
  PageHeader,
  message,
  Steps,
  Card
} from 'antd';
import "../components/sss.css"

const { Step } = Steps;

const steps = [
  {
    title: '大學期間',
    content: '',
  },
  {
    title: '維運團隊',
    content: 'Second-content',
  },
  {
    title: '自學',
    content: 'Last-content',
  },
];

const LouisApp = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Louis"
          subTitle="個人簡介"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="中文姓名">呂有崧</Descriptions.Item>
            <Descriptions.Item label="英文名字">Louis</Descriptions.Item>
            <Descriptions.Item label="入學 ~ 畢業">2018-9 ~ 2022-03</Descriptions.Item>
            <Descriptions.Item label="任職過">維運團隊 軟體工程師</Descriptions.Item>
            <Descriptions.Item label="擅長">C# Asp.net mvc架構, SQL</Descriptions.Item>
            <Descriptions.Item label="Creation Time">2022-11-23</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      <Card>
        <Steps current={current} >
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </Card>
    </>
  )
};

export default LouisApp;