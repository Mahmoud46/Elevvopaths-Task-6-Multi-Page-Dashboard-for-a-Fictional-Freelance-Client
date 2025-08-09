import type { ReactNode } from "react";
import {
	BiCalendarCheck,
	BiDollarCircle,
	BiFolder,
	BiRocket,
	BiTimeFive,
	BiUserCheck,
	BiPlus,
	BiFile,
	BiCreditCard,
	BiGroup,
	BiFileBlank,
} from "react-icons/bi";
import HorizontalBarChart, {
	BarChartComponent,
	PieChartComponent,
} from "../components/Chart";
import Table from "../components/Table";
import {
	invoicesTransactions,
	ongoingProjects,
	pendingProposals,
	recentActivity,
} from "../data/data";
import { CircularIconButton } from "../components/Button";
import { KPICard, RAFCard } from "../components/Card";

export default function Overview(): ReactNode {
	return (
		<div className="p-4 w-full">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-3xl">Client Dashboard</h1>
				<div className="flex items-centerm gap-2">
					<CircularIconButton
						icon={<BiPlus />}
						className="button hover:bg-button-active-background hover:text-main-background"
					/>
					<CircularIconButton
						icon={<BiFile />}
						className="button hover:bg-button-active-background hover:text-main-background"
					/>
					<CircularIconButton
						icon={<BiCreditCard />}
						className="button hover:bg-button-active-background hover:text-main-background"
					/>
					<CircularIconButton
						icon={<BiGroup />}
						className="button hover:bg-button-active-background hover:text-main-background"
					/>
					<CircularIconButton
						icon={<BiFileBlank />}
						className="button hover:bg-button-active-background hover:text-main-background"
					/>
				</div>
			</div>

			<div className="w-full grid gap-5 sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
				<KPICard icon={<BiRocket />} title="Total Projects" value="12" />
				<KPICard icon={<BiFolder />} title="Active Projects" value="4" />
				<KPICard icon={<BiTimeFive />} title="Pending Proposals" value="7" />
				<KPICard icon={<BiDollarCircle />} title="Total Spent" value="$8,250" />
				<KPICard icon={<BiUserCheck />} title="Hired Freelancers" value="12" />
				<KPICard icon={<BiCalendarCheck />} title="Tasks Due Today" value="2" />

				<div className="flex flex-col gap-4 h-fit justify-between col-span-2 row-span-3 bg-white rounded-2xl p-4">
					<div className="">
						<h2 className="text-2xl font-bold">Monthly Spending</h2>
						<p className="text-button-foreground text-sm mb-2">
							+22% from last month
						</p>
					</div>
					<BarChartComponent />
				</div>
				<div className="flex flex-col gap-4 h-fit justify-between col-span-2 row-span-3 bg-white rounded-2xl p-4">
					<div className="">
						<h2 className="text-2xl font-bold">Project Status</h2>
						<p className="text-button-foreground text-sm mb-2">
							60% project success rate
						</p>
					</div>
					<PieChartComponent />
				</div>
				<div className="flex flex-col gap-4 h-fit justify-between col-span-2 row-span-3 bg-white rounded-2xl p-4">
					<h2 className="text-2xl font-bold">Spending by Category</h2>
					<HorizontalBarChart />
				</div>
				<div className="flex flex-col gap-2 h-fit justify-between col-span-2 row-span-3 p-4 bg-white rounded-xl">
					<h2 className="text-2xl font-bold">Recent Activity Feed</h2>
					<div className="flex flex-col gap-2 max-h-[270px] overflow-y-auto">
						{recentActivity.map((activity, i) => (
							<RAFCard
								key={i}
								content={activity.activity}
								date={activity.date}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2 h-fit justify-between col-span-2 row-span-3 p-4 bg-white rounded-xl">
					<h1 className="text-2xl font-bold">Pending Proposals</h1>
					<div className="max-h-[270px] overflow-auto">
						<Table
							header={["Freelancer", "Project", "Rate", "Submitted", "Action"]}
							data={pendingProposals}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2 h-fit justify-between col-span-2 row-span-3 p-4 bg-white rounded-xl">
					<h1 className="text-2xl font-bold">Ongoing Projects</h1>
					<div className="max-h-[270px] overflow-auto">
						<Table
							header={["Project", "Freelancer", "Deadline", "Status", "Budget"]}
							data={ongoingProjects}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2 h-fit justify-between col-span-2 row-span-3 p-4 bg-white rounded-xl">
					<h1 className="text-2xl font-bold">Invoices & Transactions</h1>
					<div className="max-h-[270px] overflow-auto">
						<Table
							header={[
								"Invoice_ID",
								"Freelancer",
								"Project",
								"Amount",
								"Status",
								"Date",
							]}
							data={invoicesTransactions}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
