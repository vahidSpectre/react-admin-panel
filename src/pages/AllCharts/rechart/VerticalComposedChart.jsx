import React from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
    ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "صفحه A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "صفحه B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "صفحه C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "صفحه D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "صفحه E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "صفحه F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

export default function VerticalComposedChart() {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <ComposedChart
                    layout="vertical"
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
