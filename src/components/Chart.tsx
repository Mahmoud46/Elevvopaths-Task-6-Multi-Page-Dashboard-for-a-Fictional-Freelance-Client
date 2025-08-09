import type { ReactNode } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
	Legend,
	LabelList,
} from "recharts";

const bar_data = [
	{ name: "Jan", value: 600 },
	{ name: "Feb", value: 1250 },
	{ name: "Mar", value: 900 },
	{ name: "Apr", value: 1800 },
	{ name: "May", value: 2000 },
	{ name: "Jun", value: 1700 },
];

export function BarChartComponent(): ReactNode {
	return (
		<div className="w-full h-[250px]">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={bar_data} barSize={40}>
					<XAxis dataKey="name" tick={{ fontSize: 12 }} />
					<YAxis tick={{ fontSize: 12 }} />
					<Tooltip
						contentStyle={{ borderRadius: "10px", fontSize: "14px" }}
						cursor={{ fill: "#f0f0f0" }}
						formatter={(val) => `$${(val ?? 0).toLocaleString()}`}
					/>
					<Bar dataKey="value" fill="#100f14" radius={[10, 10, 0, 0]}>
						<LabelList
							dataKey="value"
							position="inside"
							fill="#fff"
							fontSize={12}
							angle={-90}
							formatter={(val) => `$${(val ?? 0).toLocaleString()}`}
						/>
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

const pie_data = [
	{ name: "Cancelled", value: 1 },
	{ name: "On Hold", value: 1 },
	{ name: "In Progress", value: 4 },
	{ name: "Completed", value: 6 },
];

const COLORS = ["#f97316", "#06b6d4", "#4f46e5", "#22c55e"];

export function PieChartComponent() {
	return (
		<div className="w-full h-[250px] pb-2">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={pie_data}
						outerRadius={80}
						innerRadius={60}
						fill="#8884d8"
						paddingAngle={4}
						dataKey="value"
						nameKey="name"
					>
						{pie_data.map((_, index) => (
							<Cell key={index} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
					<Tooltip
						contentStyle={{ borderRadius: "10px", fontSize: "12px" }}
						cursor={{ fill: "#f9fafb" }}
					/>
					<Legend
						verticalAlign="bottom"
						height={10}
						iconType="circle"
						wrapperStyle={{
							fontSize: "12px",
						}}
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}

const hr_data = [
	{ name: "Design", value: 3200 },
	{ name: "Development", value: 2800 },
	{ name: "Content Writing", value: 1200 },
	{ name: "Marketing", value: 1050 },
];

export default function HorizontalBarChart() {
	return (
		<div className="w-full h-[250px]">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					layout="vertical"
					data={hr_data}
					barSize={40}
					margin={{ top: 10, right: 20, bottom: 10, left: 40 }}
				>
					<XAxis type="number" tick={{ fontSize: 12 }} />

					<YAxis
						type="category"
						dataKey="name"
						tick={{
							fontSize: 12,
							textAnchor: "end",
						}}
						interval={0}
					/>

					<Bar dataKey="value" fill="#100f14" radius={[0, 10, 10, 0]}>
						<LabelList
							dataKey="value"
							position="insideRight"
							fill="#fff"
							fontSize={12}
							formatter={(val) => `$${(val ?? 0).toLocaleString()}`}
						/>
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
