import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "صفحه A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "صفحه B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "صفحه C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "صفحه D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "صفحه E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "صفحه F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "صفحه G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function SimpleAreaChart() {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
