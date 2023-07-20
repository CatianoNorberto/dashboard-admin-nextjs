'use client'

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  PieChartBoxContainer,
  Chart,
  Options,
  Option,
  Title,
  Dot
}from './style'

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <PieChartBoxContainer>
      <h1>Leads by Source</h1>
      <Chart>
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Chart>
      <Options>
        {data.map((item) => (
          <Option className="option" key={item.name}>
            <Title className="title">
              <Dot className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </Title>
            <span>{item.value}</span>
          </Option>
        ))}
      </Options>
    </PieChartBoxContainer>
  );
};

export default PieChartBox;
