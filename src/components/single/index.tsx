'use client'

import Image from "next/image";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  SingleContainer,
  SingleView,
  SingleInfo,
  SingleTopInfo,
  SingleDetails,
  SingleItem,
  SingleChart,
  SingleActivities
} from './style'

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  return (
    <SingleContainer>
      <SingleView>
        <SingleInfo>
          <SingleTopInfo>
            {props.img && <Image src={props.img} alt="" width={100} height={100}/>}
            <h1>{props.title}</h1>
            <button>Update</button>
          </SingleTopInfo>
          <SingleDetails>
            {Object.entries(props.info).map((item) => (
              <SingleItem key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </SingleItem>
            ))}
          </SingleDetails>
        </SingleInfo>
        <hr />
        {props.chart && (
          <SingleChart>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    key={dataKey.name}
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </SingleChart>
        )}
      </SingleView>
      <SingleActivities className="activities">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </SingleActivities>
    </SingleContainer>
  );
};

export default Single;
