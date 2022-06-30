import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Yanvar',
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fevral',
    uv: 5000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mart',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Aprel',
    uv: 1000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 4500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Iyun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Iyul',
    uv: 4000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Avgust',
    uv: 1000,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
