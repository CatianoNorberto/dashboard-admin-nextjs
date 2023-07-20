'use client'

import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  BarChartBoxContainer,
  Chart
} from './style'

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <BarChartBoxContainer>
      <h1>{props.title}</h1>
      <Chart>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </Chart>
    </BarChartBoxContainer>
  );
};

export default BarChartBox;
