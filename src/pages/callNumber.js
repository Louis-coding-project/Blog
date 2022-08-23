import React, { useState } from "react";
import { Card, Button } from 'antd';
import "../components/numberuse.css"

const CoolNumber = () => {
  const [num, setNum] = useState(1);
  const [nextnum, setNextnum] = useState(1);

  const reserve = () => {
    setNum(num + 1);
    console.log(num)
    alert('預約號碼為:'+ num)
  };

  const callNext = () => {
    if (nextnum < num) {
      setNextnum(nextnum + 1);
      console.log(nextnum)
      alert('目前號碼:'+ nextnum)
    }else{
      alert('目前沒有下一位預約')
    }
  };

  return (
    <body>
      <div className="site-card-border-less-wrapper">
        <Card
          title="等待組數"
          bordered={false}
          style={{
            width: 300,
          }}
        > 
        { 
          (nextnum - num < 0) ? (num - nextnum) + "組" : "無等待組"
        }
        </Card>
        <div className="next-button">
          <Button type="primary" onClick={() => reserve()}>reserve</Button>
          <br />
          <br />
          <Button type="primary" onClick={() => callNext()}>Next</Button>
        </div>
        <Card
          title="目前號碼"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          {nextnum - 1 + '號'}
        </Card>
      </div>
    </body>
  )
};

export default CoolNumber;

