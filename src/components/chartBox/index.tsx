'use client'

import Link from "next/link";
import Image from "next/image";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  ChartBoxContainer,
  BoxInfon,
  Title,
  ChartInfo,
  Chart,
  Contents
} from './style'

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <ChartBoxContainer>
      <BoxInfon>
        <Title>
          <Image src={props.icon} alt="" width={60} height={60}/>
          <span>{props.title}</span>
        </Title>
        <h1>{props.number}</h1>
        <Link href="/" style={{ color: props.color }}>
          View all
        </Link>
      </BoxInfon>
      <ChartInfo>
        <Chart>
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Chart>
        <Contents>
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </Contents>
      </ChartInfo>
    </ChartBoxContainer>
  );
};

export default ChartBox;
